/**
 * Created by serj on 6/27/17.
 */
import Entypo from "react-native-vector-icons/Entypo";
import {header} from "../globalStyles";
import {StatusBar, View, Text, StyleSheet} from "react-native";
import React from "react";

export const Bar = (props) => {
    let headerText = props.header;
    let navigate = props.navigate;
    return  <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
      }}>
        <View style={{width: 50}}>
            <Entypo onPress={()=>navigate("DrawerOpen")} name='menu' size={50}/>
        </View>
        <View style={{height: 50}}>
            <Text style={header}>{headerText}</Text>
        </View>
        <View style={{width: 50}}/>
    </View>
}