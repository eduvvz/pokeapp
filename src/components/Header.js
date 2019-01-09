import React, {Component} from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import imgLogo from '../../assets/img/pokebola-go.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={imgLogo} style={styles.image} />
                </View>
            </View>
        )
    }
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        resizeMode: 'contain',
    },
})

export default Header