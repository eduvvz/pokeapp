import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header'

class PokemonList extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Pokemon List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default PokemonList