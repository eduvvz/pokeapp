import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList, List} from 'react-native';
import Header from '../components/Header'
import { server } from '../common'
import axios from 'axios'

class PokemonList extends Component {
    
    state = {
        pokemons: [],
        loading: true
    }

    componentDidMount = async() => {
        this.getPokemons()
    }

    getPokemons = async () => {
        try {
            const res = await axios.get(`${server}/pokemon`)
            const pokemons = res.data.results
            console.log(pokemons)
            this.setState({ pokemons, loading: false })
        } catch (error) {
            console.log(error)
        }
    }

    test = item => {
        console.log(item.name)
        console.log(this.state.pokemons.length)
    }

    render() {
        const loader = <ActivityIndicator size="large" color="tintColor" />
        const main =
            <FlatList
                data={this.state.pokemons}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            {this.test(item)}
                            <Text style={styles.textList}>{item.name}</Text>
                        </View>
                    );
                }}
            />

        return (
        <View>
            <Header />
            <View style={[styles.container, this.state.loading ? styles.loader : null]}>
                {this.state.loading ? loader : main}
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    loader: {
        marginTop: 200
    },
    textList: {
        color: 'black'
    }
})

export default PokemonList