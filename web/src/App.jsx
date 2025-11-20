import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import StudentDetail from './pages/StudentDetail'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/">Meu Estudo de Caso</Link>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aluno/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
