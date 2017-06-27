import React from 'react'
import { StatusBar, TouchableHighlight, View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'
import {header} from '../globalStyles';
import {Bar} from './../Bar'


const Home=(props)=>{
    let userName = props.userName;
    const { navigate } = props.navigation;
    return (
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
            }}>
            <Bar header="Home" navigate={navigate} />
            <View style={{flex:1}}>
            </View>
            <View style={{
                flex:3,
                alignItems: 'center'
            }}>
                <Text style={header}>Hello, {userName}</Text>
            </View>
        </View>

    )
};


function mapStateToProps (state) {
    return {
        userName: state.appData.userName
    }
}
export default connect(
    mapStateToProps,
)(Home)
