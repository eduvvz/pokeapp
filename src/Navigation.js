import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import PokemonList from './screens/PokemonList'
import PokemonSearch from './screens/PokemonSearch'
import Profile from './screens/Profile'

const MenuRoutes = {
    PokemonSearch: {
        name: 'PokemonSearch',
        screen: PokemonSearch,
        navigationOptions: {
            title: 'Pokemon Search',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='search' size={30} color={tintColor} />
        }
    },
    PokemonList: {
        name: 'PokemonList',
        screen: PokemonList,
        navigationOptions: {
            title: 'Pokemon List',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='list' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'PokemonSearch',
    tabBarOptions: {
        showLabel: false,
        backgroundColor: '#00000'
    },
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
const App = createAppContainer(MenuNavigator);

export default App