import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '../common'
import Icon from 'react-native-vector-icons/FontAwesome'

class Menu extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.box} 
                        onPress={() => this.props.navigation.navigate('PokemonSearch')}
                    >
                        <Text style={styles.text}>Procurar Pokemon</Text>
                        <Icon style={styles.icon} name={'search'} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} 
                        onPress={() => this.props.navigation.navigate('PokemonList')}
                    >
                        <Text style={styles.text}>Nossos Pokemons</Text>
                        <Icon style={styles.icon} name={'list'} size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.text}>Comparar</Text>
                        <Icon style={styles.icon} name={'bolt'} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} 
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text style={styles.text}>Perfil</Text>
                        <Icon style={styles.icon} name={'user'} size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        padding: 30
    },
    containerRow: {
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom: 5
    },
    box: {
        backgroundColor: colors.firstColor.hex,
        flex: 1,
        margin: 5,
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        color: colors.secondColor.hex,
        fontWeight: 'bold'
    },
    icon: {
        color: colors.secondColor.hex,
        marginTop: 5
    }
})

export default Menu