import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import yohana from './assets/yohana.jpg'; 

const estilo = ["Yohana Teixeira", "<b>Yohana Teixeira</b>", "<i>Yohana Teixeira</i>", "<u>Yohana Teixeira</u>"];
const formatos = ["Tradicional", "Negrito", "Itálico", "Sublinhar", "Reiniciar"];

export default function App() {
  const [nome, setNome] = useState(0);
  const handlePress = () => (
    setNome((nome+1) % formatos.length)
  );

  return (
    <View style={estilo.container}>
       <Image source={yohana} style={{ width: 305, height: 159}} style={estilo.yohana} /> 
      <Text>{estilo[nome]}</Text>
      <Button title={formatos[nome]} onPress={handlePress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2e7e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
