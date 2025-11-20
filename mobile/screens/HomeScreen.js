import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { getStudents } from '../services/api'

export default function HomeScreen({ navigation }) {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudents().then((data) => setStudents(data)).finally(() => setLoading(false))
  }, [])

  if (loading) return <View style={{padding:20}}><Text>Carregando...</Text></View>

  return (
    <View style={{flex:1, padding: 16}}>
      <Text style={{fontSize:18, marginBottom:10}}>Lista de Alunos</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })} style={{padding:10, borderBottomWidth:1}}>
            <Text style={{fontSize:16}}>{item.nome}</Text>
            <Text style={{color:'#666'}}>{item.cpf}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
