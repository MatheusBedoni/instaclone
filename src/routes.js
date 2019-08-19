import React from 'react'
import { Image } from 'react-native'

import { createAppNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import logo from './assets/instagram.png'

import Feeds from './pages/Feeds'

const routes = createAppContainer(
    createStackNavigator({
        Feeds
    },{
        headerLayoutPresset: 'center',
        defaultNavigationOptions:{
            headerTitle: <Image source={logo}/>,
            headerStyle:{
                backgroundColor: '#f5f5f5'
            },
        },
    })
);

export default routes
