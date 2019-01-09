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
        const main = <View style={styles.container}><Text>color</Text></View>
        const listItem = <View style={styles.listItem}></View>
            /*<FlatList
                data={this.state.pokemons}
                style={styles.flatlist}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            {this.test(item)}
                            <Text style={styles.textList}>{item.name}</Text>
                        </View>
                    )
                }}

                <FlatList
                        style={styles.listContainer}
                        data={this.state.pokemons}
                        renderItem={({item}) => <CardPokemon {...item} />}
                        keyExtractor={(item, index) => index}
                />
            />*/

        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                    <FlatList
                        data={this.state.pokemons}
                        renderItem={({item}) => <CardPokemon {...item} />}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    scrollview: {
        flex: 1,
        flexDirection: 'row',
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'blue',

    },
})

export default PokemonList