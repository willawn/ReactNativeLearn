import {Component} from "react";
import {Text, View} from "react-native";
import React from "react";

export default class Details extends Component {
    static navigationOptions = {
        title: 'Go to Details2',
    };
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen444</Text>
            </View>
        );
    }
}
