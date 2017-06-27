import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import SignIn from './components/SignIn'
import HomeNavigation from './components/Home/HomeNavigation';
import { StackNavigator} from 'react-navigation';

const disableHeader = ({navigation}) => ({
    header: null,
});

const SimpleApp = StackNavigator({
    SignIn: { screen: SignIn, title: '',  navigationOptions:disableHeader},
    Home: { screen: HomeNavigation, title: 'Home Page' ,navigationOptions: ({navigation}) => ({
        header: null,
    })},
});

export default SimpleApp;