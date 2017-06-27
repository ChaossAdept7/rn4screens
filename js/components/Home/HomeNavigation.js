/**
 * Created by serj on 6/26/17.
 */
import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import SignOut from './../../components/SignOut';
import DisplayData from './../../components/DisplayData';
import Home from '../Home';

const WrapSignOut = (props)=>{
    const { navigate } = props.navigation;

    return (
        <SignOut navigation={ navigate } />
    )
}

const disableHeader = ({navigation}) => ({
    header: "Test",
});

const HomeNavigation=DrawerNavigator({
    Home:{ screen: Home ,
        navigationOptions: disableHeader,
    },
    StackOverFlow:{ screen: DisplayData, navigationOptions: disableHeader},
    SignOut:{ screen: SignOut ,navigationOptions: disableHeader}

});

export default HomeNavigation;
