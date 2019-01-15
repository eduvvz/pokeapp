import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

class Profile extends Component {
  render() {
    return (
      <View>
        <Header onPress={() => this.props.navigation.navigate('Menu')}/>
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

export default Profile