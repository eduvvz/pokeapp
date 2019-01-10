import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
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
    this.setState({ loading: true })
    this.setState({pokemonName})
    this.getPokemon(pokemonName.toLowerCase());
  }

  componentDidMount(){
    console.log('montou')
  }

  /*getParamsNavigation = () => {
    const { navigation } = this.props;
    let pokemonName = navigation.getParam('pokemonName', '')
    if(pokemonName.length > 0){
      this.setState({pokemonName}).then(()=>{pokemonName = ''})
      console.log(this.state)
    }
  }*/

  getPokemon = async name => {
    if(name.length > 0){
      try {
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
    const imgPokemonUri = this.state.pokemonSearch ? {uri: this.state.pokemonSearch.sprites.front_default} : null
    const imgJsx = <Image source={imgPokemonUri} style={styles.pokemonImg} />
    const loader = <ActivityIndicator style={styles.loading} size="large" color="tintColor" />


    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.containerInput}>
          <Input icon='search' placeholder='Buscar Pokemon...' style={styles.input}
              onChangeText={pokemonName => this.handlerInput(pokemonName)}
              value={this.state.pokemonName} />
        </View>
        { this.state.pokemonSearch ? imgJsx : null }
        { this.state.loading ? loader : this.handlerRender() }
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
    },
})

export default PokemonShared