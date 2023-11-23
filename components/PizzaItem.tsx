import react from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PizzaItem = () => {
    const [name, setName] = useState('nenhumma')

    const handleButton1 = () => {
        setName('calabresa')
    }
    const handleButton2 = () => {
        setName('frango')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.flavor}>Pizza {name}</Text>
            <Text>R$ 50,00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 30,
        backgroundColor: '#BEBEBE',
        alignItems: 'center'
    },
    flavor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0000DD"
    },
    price: {
        fontSize: 17,
        color: '#aaa'
    }
})