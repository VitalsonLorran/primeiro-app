import { Button, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { PizzaItem } from "./components/PizzaItem";

function App() {

  const handleButton = () => {
    Alert.alert("Apertou")
  }

  return(
    <SafeAreaView>
      <Text style={styles.store}> Pizzaria bonapetit</Text>
      <Button title = "Clique aqui" onPress={handleButton} />
      <PizzaItem/>
      <PizzaItem/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  store: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    paddingBottom: 15
  }
})

export default App