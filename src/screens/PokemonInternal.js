import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import Header from '../components/Header'
import Pokemon from '../components/Pokemon'

import axios from 'axios'
import { server } from '../common'

class PokemonInternal extends Component {
    
    state = {
        pokemon: null,
        loading: true
    }

    componentDidMount(){
        const { navigation } = this.props
        this.getPokemon(navigation.getParam('pokemonName'))
    }

    getPokemon = async name => {
        if(name.length > 0){
            try {
                const res = await axios.get(`${server}pokemon/${name}`)
                this.setState({ pokemon: res.data, loading: false })
            } catch (error) {
                this.setState({ pokemon: null, loading: false })
                console.log(error)
            }
        }
    }

    render(){
        const loader = <ActivityIndicator style={styles.loading} size="large" color="tintColor" />
        const pokemonDetails = <View style={styles.pokemonContainer}><Pokemon pokemon={this.state.pokemon}/></View>
        return (
            <View style={styles.container}>
                <Header onPress={() => this.props.navigation.goBack()}/>
                { this.state.loading ? loader : pokemonDetails }    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        marginTop: 70
    },
    pokemonContainer: {
        flex: 1,
        padding: 10,
        marginTop: 20
    }
})

export default PokemonInternal