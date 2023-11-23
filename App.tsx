import { Button, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
// import { PizzaItem } from "./components/PizzaItem";
import { useState } from "react";

function App() {

  const [name, setName] = useState('fulano')
  const botao1 = () => {
    setName('Lorran')
  }
  const botao2 = () => {
    setName('Clara')
  }
  return(
    <SafeAreaView>
      <Text style={styles.title}>Meu primeiro app React Native</Text>
      <Text style={styles.subtitle}>Meu nome é {name}</Text>
      <Button title="Mudar para Lorran" onPress={botao1}/>
      <Button title="Mudar para Clara" onPress={botao2}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    padding: 15
  },
  subtitle:{
    fontSize:20,
    color: 'black',
    textAlign: 'center',
    margin: 30
  }
})

export default App