/**
 * Created by serj on 6/26/17.
 */
import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'

import { connect } from 'react-redux'
import { fetchData,doLogin} from './../../actions'
import {header} from '../globalStyles';

import { Keyboard } from 'react-native';


let validate = (message)=>{
    if(message.length > 0){
        Alert.alert(
            'Error',
            `${message}`,
            [
                {text: 'OK'},
            ],
            { cancelable: false }
        )
        return false;
    }
    return true;
};

class App extends Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            userName:"",
            password:""
        }
    }

    login(){
        this.props.doLogin(this.state.userName);
        // console.log("Store!",this.props.appData.userName);
        const { navigate } = this.props.navigation;
        /* check credentials */
        let error  = "";
        if(this.state.userName == ""){
            error =error+"Username empty\n";
        }
        if(this.state.password == ""){
            error =error+"Password empty\n";
        }
        /* perform validation */
        if(validate(error)){
            /* hide keyboard before navigating */
            Keyboard.dismiss();
            navigate('Home');
        }

    }

    render(){
        return (
            <View style={
                {
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                }
            }>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                      }}>
                    <Text style={header}>Welcome!</Text>
                </View>
                <View style={
                    {
                        padding: 10,
                        flex: 2,
                    }
                }>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter username"
                        onChangeText={(text) => this.setState({userName:text})}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={{height: 40}}
                        placeholder="Enter password"
                        onChangeText={(text) => this.setState({password:text})}
                    />
                    <Button
                        onPress={this.login}
                        title="Sign In"
                        color="#1194f6"
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData()),
        doLogin: (userName) => dispatch(doLogin(userName)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)