import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getStudent } from '../services/api'

export default function StudentDetail() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    let mounted = true
    getStudent(id).then((data) => mounted && setStudent(data))
    return () => (mounted = false)
  }, [id])

  if (!student) return <div>Carregando...</div>

  return (
    <div>
      <Link to="/">&larr; Voltar</Link>
      <h2 className="mt-3">{student.nome}</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>CPF:</strong> {student.cpf}</p>
      <pre>{JSON.stringify(student, null, 2)}</pre>
    </div>
  )
}
