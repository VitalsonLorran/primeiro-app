import { View, Text, StyleSheet } from 'react-native'

export const PizzaItem = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.flavor}>Pizza Calabresa</Text>
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