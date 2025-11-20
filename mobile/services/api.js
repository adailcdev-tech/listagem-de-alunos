import axios from 'axios'

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://proweb.leoproti.com.br'
const api = axios.create({ baseURL })

export async function getStudents() {
  try {
    const res = await api.get('/aluno')
    return res.data
  } catch (err) {
    return [
      { id: 1, nome: 'Aluno Exemplo 1', cpf: '000.000.000-00' },
      { id: 2, nome: 'Aluno Exemplo 2', cpf: '111.111.111-11' }
    ]
  }
}

export async function getStudent(id) {
  try {
    const res = await api.get(`/aluno/${id}`)
    return res.data
  } catch (err) {
    return { id, nome: `Aluno ${id}`, cpf: '000.000.000-00' }
  }
}

export default api
