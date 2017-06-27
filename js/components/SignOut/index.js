/**
 * Created by serj on 6/26/17.
 */
import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {header} from '../globalStyles';
import {Bar} from './../Bar'

const SignOut=(props)=>{
    const { navigate } = props.navigation;
    return (
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
            <Bar header="Sign Out" navigate={navigate} />
            <View style={{flex:1}}>
            </View>
            <View style={{flex:2,alignItems: 'center'}}>
                <Text style={header}>Good Bye!</Text>
            </View>
            <View style={{flex:4, alignItems: 'stretch',padding: 10}}>
                <Button
                    onPress={()=>navigate('SignIn')}
                    title="Sign Out"
                    color="#1194f6"
                />
            </View>
        </View>
    )
}

export default SignOut;
