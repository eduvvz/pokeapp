import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Header from '../components/Header'
import Input from '../components/Input'
import CardPokemon from '../components/CardPokemon'
import axios from 'axios'
import { server } from '../common'

class PokemonShared extends Component {

  state = {
    loading: false,
    pokemonName: '',
    pokemonSearch: null,
    showPokemon: false
  }

  handlerInput = async pokemonName => {

    pokemonName = pokemonName.toLowerCase()
    this.setState({pokemonName})

    if(pokemonName.length > 0){
      try {
        const res = await axios.get(`${server}/pokemon/${pokemonName}`)
        this.setState({pokemonSearch: res.data})
        this.setState({showPokemon: true})
        console.log(this.state.pokemonSearch)
      } catch (error) {
        console.log(error)
      }
    }
  }

  handlerRender = () => {
    if(this.state.pokemonSearch){
      console.log(this.state.pokemonSearch.sprites.front_default);
    }
    if(this.state.showPokemon) {
      return <View style={styles.containerPokemon}>
        <View style={styles.pokemon}>
          <View style={styles.containerImg}>
            <Image 
              source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              style={styles.pokemonImg} 
            />
          </View>
          <View style={styles.containerStats}></View>
        </View>
      </View>
    } else {
      return <View style={styles.containerPokemon}>
        <Text>Não achou</Text>
      </View>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.containerInput}>
          <Input icon='search' placeholder='Buscar Pokemon...' style={styles.input}
              onChangeText={pokemonName => this.handlerInput(pokemonName)}
              value={this.state.pokemonName} />
        </View>
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
    containerImg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pokemonImg: {
      width: 50,
      resizeMode: 'contain'
    },
    containerStats: {
      flex: 3,
      backgroundColor: 'blue'
    }
})

export default PokemonShared