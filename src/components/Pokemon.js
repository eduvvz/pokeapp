import React from 'react'
import { Image, View, Text, StyleSheet, FlatList } from 'react-native'
import CardStats from '../components/CardStats'

export default props => {

    const imgPokemonUri = {uri: props.pokemon.sprites.front_default}
    const imgJsx = <Image source={imgPokemonUri} style={styles.pokemonImg} />

    return (
        <View style={styles.containerPokemon}>
            <Image source={imgPokemonUri} style={styles.pokemonImg} />
            <View style={styles.pokemon}>
                <View style={styles.containerStats}>
                    <FlatList 
                    data={props.pokemon.stats}
                    renderItem={({item}) => <CardStats {...item} />}
                    keyExtractor ={(item, index) => index.toString()}
                    numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPokemon: {
      flex: 3,
    },
    pokemon: {
      flex: 1
    },
    pokemonImg: {
      height: 100, 
      resizeMode: 'contain'
    },
    containerStats: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
})