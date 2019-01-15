import React, {Component} from 'react'
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native'
import imgLogo from '../../assets/img/pokebola-go.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../common'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={props.onPress}>
                        <Icon 
                            name={'list'} 
                            size={30} 
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2 }}>
                    <Image source={imgLogo} style={styles.image} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    icon: {
        color: colors.firstColor.hex
    }
})