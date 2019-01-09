import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList, List} from 'react-native'
import Header from '../components/Header'
import { server } from '../common'
import axios from 'axios'
import CardPokemon from '../components/CardPokemon'

class PokemonList extends Component {
    
    state = {
        pokemons: [],
        loading: true
    }

    componentDidMount = async () => {
        this.getPokemons()
    }

    getPokemons = async () => {
        try {
            const res = await axios.get(`${server}/pokemon`)
            const pokemons = res.data.results.filter((item, index) => {
                if(index < 100){
                    return item
                }
            })
            this.setState({ pokemons, loading: false })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const loader = <ActivityIndicator style={styles.loading} size="large" color="tintColor" />
        const list = 
        <ScrollView>
            <FlatList
                data={this.state.pokemons}
                renderItem={({item}) => <CardPokemon {...item} />}
                keyExtractor ={(item, index) => index.toString()}
            />
        </ScrollView>

        return (
            <View style={styles.container}>
                <Header />
                { this.state.loading ? loader : list }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    loading: {
        marginTop: 70
    }
})

export default PokemonList