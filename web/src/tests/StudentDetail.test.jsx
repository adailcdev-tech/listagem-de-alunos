import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import StudentDetail from '../pages/StudentDetail'; // Corrigido: Nome do componente e do arquivo
import { getStudent } from '../services/api';

// Mocka o módulo 'api.js' para controlar a função 'getStudent'.
vi.mock('../services/api');

test('renders student details after fetching', async () => {
  const mockAluno = {
    id: 1,
    nome: 'Ana Pereira',
    cpf: '123.456.789-00', // Corrigido: Usa 'cpf' como no componente real
  };

  // Configura o mock para retornar os dados do aluno quando 'getStudent' for chamada.
  getStudent.mockResolvedValue(mockAluno);

  render(
    <MemoryRouter initialEntries={['/aluno/1']}>
      <Routes>
        <Route path="/aluno/:id" element={<StudentDetail />} /> {/* Corrigido: Nome do componente */}
      </Routes>
    </MemoryRouter>
  );

  // Verifica se os detalhes do aluno são renderizados na tela
  // Busca pelo título (h2) com o nome, para ser mais específico e evitar duplicidade.
  expect(await screen.findByRole('heading', { name: /Ana Pereira/i })).toBeInTheDocument();

  // Busca pelo elemento que contém o texto do CPF.
  // Como o texto pode estar quebrado (ex: <strong>CPF:</strong> 123...),
  // procuramos pelo elemento que contém o número.
  expect(screen.getByText('123.456.789-00')).toBeInTheDocument();

  // Garante que a função getStudent foi chamada uma vez com o ID correto.
  expect(getStudent).toHaveBeenCalledWith('1');
  expect(getStudent).toHaveBeenCalledTimes(1);
});