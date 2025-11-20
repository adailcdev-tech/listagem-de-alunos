import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStudents } from '../services/api'

export default function Home() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    getStudents()
      .then((data) => {
        if (mounted) setStudents(data)
      })
      .catch(() => {
        if (mounted) setStudents([])
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <div>Carregando alunos...</div>

  return (
    <div className="container my-4">
      <h2>Lista de Alunos</h2>
      <div className="row">
        {students.map((s) => (
          <div key={s.id} className="col-md-4 mb-3">
            <Link to={`/aluno/${s.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card p-3 shadow-sm">
                <h5>{s.nome}</h5>
                <p className="mb-0 text-muted">CPF: {s.cpf}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
