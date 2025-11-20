import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { getStudents } from '../services/api';

// Mocka o módulo 'api.js' para controlar a função 'getStudents'.
vi.mock('../services/api');

test('renders loading and then list of students', async () => {
  const mockAlunos = [
    { id: 1, nome: 'João Silva', cpf: '111.111.111-11' },
    { id: 2, nome: 'Maria Souza', cpf: '222.222.222-22' },
  ];

  // Configura o mock para retornar os dados dos alunos quando 'getStudents' for chamada.
  getStudents.mockResolvedValue(mockAlunos);

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Verifica o estado inicial de "carregando"
  expect(screen.getByText(/carregando/i)).toBeInTheDocument();

  // Espera que os dados da requisição sejam carregados e exibidos
  // Usamos findByText que já usa waitFor internamente
  expect(await screen.findByText('João Silva')).toBeInTheDocument();
  expect(await screen.findByText('Maria Souza')).toBeInTheDocument();

  // Garante que o estado de "carregando" desapareceu
  expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();

  // Verifica se a função `getStudents` foi chamada ao menos uma vez.
  expect(getStudents).toHaveBeenCalledTimes(1);
});