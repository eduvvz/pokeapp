import React, {Component} from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import imgLogo from '../../assets/img/pokebola-go.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image 
                    style={styles.imgLogo} 
                    source={imgLogo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 15,
        width: '100%',
        backgroundColor: 'white',
    },
    imgLogo: {
        alignSelf: 'center',
    },
})

export default Header