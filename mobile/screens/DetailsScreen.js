import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getStudent } from '../services/api'

export default function DetailsScreen({ route }) {
  const { id } = route.params
  const [student, setStudent] = useState(null)

  useEffect(() => {
    getStudent(id).then(setStudent)
  }, [id])

  if (!student) return <View style={{padding:20}}><Text>Carregando...</Text></View>

  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:20}}>{student.nome}</Text>
      <Text>ID: {student.id}</Text>
      <Text>CPF: {student.cpf}</Text>
      <Text style={{marginTop:10}}>Dados: {JSON.stringify(student)}</Text>
    </View>
  )
}
