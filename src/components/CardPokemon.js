import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import pokebola from '../../assets/img/pokebola.png';

export default props => {

    return (
        <View style={styles.card}>
            <Image style={styles.icon} source={pokebola}/>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 25,
        color: 'white',
        fontSize: 25
    },
    card: {
        padding: 10,
        width: '90%',
        height: 60,
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 6,
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 30,
        width: 30,
    }
})
