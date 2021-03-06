import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header'
import Input from '../components/Input'
import CardPokemon from '../components/CardPokemon'
import Pokemon from '../components/Pokemon'
import axios from 'axios'
import { server } from '../common'
import imgPokebola from '../../assets/img/pokebola.png';

class PokemonShared extends Component {

  state = {
    loading: false,
    pokemonName: '',
    pokemonSearch: null,
    showPokemon: false
  }

  handlerInput = async pokemonName => {
    this.setState({ loading: true })
    this.setState({pokemonName})
    this.getPokemon(pokemonName.toLowerCase());
  }

  getPokemon = async name => {
    if(name.length > 0){
      try {
        console.log(`${server}pokemon/${name}`)
        const res = await axios.get(`${server}/pokemon/${name}`)
        this.setState({ pokemonSearch: res.data, showPokemon: true, loading: false })
      } catch (error) {
        this.setState({ showPokemon: false, pokemonSearch: null, loading: false })
        console.log(error)
      }
    }
  }

  handlerRender = () => {
    if(this.state.showPokemon) {
      return <Pokemon pokemon={this.state.pokemonSearch}/>
    } else {
      return <View style={styles.containerPokemon}>
        <Image 
          source={imgPokebola} 
          style={{ width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center' }}
        />
      </View>
    }
  }

  render() {
    const loader = <ActivityIndicator style={styles.loading} size="large" color="tintColor" />

    return (
      <View style={styles.container}>
        <Header onPress={() => this.props.navigation.navigate('Menu')} isMenu={true} />
        <View style={styles.containerInput}>
          <Input icon='search' placeholder='Buscar Pokemon...' style={styles.input}
              onChangeText={pokemonName => this.handlerInput(pokemonName)}
              value={this.state.pokemonName} />
        </View>
        { this.state.loading ? loader : this.handlerRender() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPokemon: {
    flex: 3,
  },
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
})

export default PokemonShared