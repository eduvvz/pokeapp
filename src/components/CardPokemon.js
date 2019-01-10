import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import pokebola from '../../assets/img/pokebola.png';

export default props => {

    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <Image style={styles.icon} source={pokebola}/>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
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
