import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default props => {
    return(
        <View style={styles.card}>
            <Text style={styles.title}>{props.stat.name.replace('-', ' ')}</Text>
            <Text style={styles.value}>{props.base_stat}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginTop: 10,
        flexBasis: 0
    },
    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    value: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    }
})
