import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput,  View } from 'react-native';
import React, {useState} from 'react';
import yohana from './assets/yohana.jpg'; 


const estilo = ["Yohana Teixeira", "<b>Yohana Teixeira</b>", "<i>Yohana Teixeira</i>", "<u>Yohana Teixeira</u>"];
const formatos = ["Tradicional", "Negrito", "Itálico", "Sublinhado", "Reiniciar"];

export default function App() {
  const [nomeInput, setnomeInput] = useState('');
  const [titulo,settitulo] = useState('');
  const [nome, setNome] = useState(0);
  const handlePress = () => {
    setNome((nome+1) % formatos.length);
  };
   const botaoTitulo  = () => {
    settitulo(nomeInput)
  };
  

  return (
    <View style={estilos.container}>
      <ImageBackground source={ require('./assets/PlanoFundoClaro.png')} resizeMode="cover" style={estilos.image}>
      <Text>{titulo}</Text>
      <View style={{borderRadius:200, overflow:"hidden"}}><Image source={yohana} style={{ width: 305, height: 300}}/></View> 
      <TextInput placeholder='Digite seu curso'  style={estilos.input} onChangeText={setnomeInput} value={nomeInput} />
      <Button title={'Enviar'} onPress={botaoTitulo }/>
      <br/>
      <Text>{estilo[nome]}</Text>
      <Button title={formatos[nome]} onPress={handlePress}/>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2e7e8',
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
