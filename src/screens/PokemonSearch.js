import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import Header from '../components/Header'
import Input from '../components/Input'
import CardPokemon from '../components/CardPokemon'
import CardStats from '../components/CardStats'
import axios from 'axios'
import { server } from '../common'

class PokemonShared extends Component {

  state = {
    loading: false,
    pokemonName: '',
    pokemonSearch: null,
  }

  handlerInput = async pokemonName => {

    this.setState({pokemonName})
    const pokemonNameFormated = pokemonName.toLowerCase()

    if(pokemonNameFormated.length > 0){
      try {
        const res = await axios.get(`${server}/pokemon/${pokemonNameFormated}`)
        this.setState({pokemonSearch: res.data})
        this.setState({showPokemon: true})
      } catch (error) {
        console.log(error)
      }
    }
  }

  handlerRender = () => {
    if(this.state.showPokemon) {
      return <View style={styles.containerPokemon}>
        <View style={styles.pokemon}>
          <View style={styles.containerStats}>
            <FlatList 
              data={this.state.pokemonSearch.stats}
              renderItem={({item}) => <CardStats {...item} />}
              keyExtractor ={(item, index) => index.toString()}
              numColumns={2}
            />
          </View>
        </View>
      </View>
    } else {
      return <View style={styles.containerPokemon}>
        <Text>Não achou</Text>
      </View>
    }
  }

  render() {
    let imgPokemonUri = this.state.pokemonSearch ? {uri: this.state.pokemonSearch.sprites.front_default} : null
    const imgJsx = <Image source={imgPokemonUri} style={styles.pokemonImg} />

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.containerInput}>
          <Input icon='search' placeholder='Buscar Pokemon...' style={styles.input}
              onChangeText={pokemonName => this.handlerInput(pokemonName)}
              value={this.state.pokemonName} />
        </View>
        { this.state.pokemonSearch ? imgJsx : null }
        { this.handlerRender() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    containerInput: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 15,
    },
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
    }
})

export default PokemonShared