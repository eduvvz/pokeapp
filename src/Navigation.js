import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import PokemonList from './screens/PokemonList'
import PokemonSearch from './screens/PokemonSearch'
import Profile from './screens/Profile'
import Menu from './screens/Menu'
import PokemonInternal from './screens/PokemonInternal'

const MenuRoutes = {
    PokemonSearch: {
        name: 'PokemonSearch',
        screen: PokemonSearch,
        navigationOptions: {
            title: 'Pokemon Search',
        }
    },
    PokemonList: {
        name: 'PokemonList',
        screen: PokemonList,
        navigationOptions: {
            title: 'Pokemon List',
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
        }
    },
    Menu: {
        name: 'Menu',
        screen: Menu
    },
    PokemonInternal: {
        name: 'PokemonInternal',
        screen: PokemonInternal
    }
}

const MenuNavigator = createStackNavigator(MenuRoutes, {
    initialRouteName: 'PokemonSearch',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
const App = createAppContainer(MenuNavigator);

export default App