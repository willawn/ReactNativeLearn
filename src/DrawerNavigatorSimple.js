'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    PixelRatio,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen</Text>
        <Button
            onPress={() => navigation.navigate('DrawerToggle')}
            title="Open Drawer"
        ></Button>
    </View>
);

const ProfileScreen = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>ProfileScreen</Text></View>
);

const RootDrawer = DrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'MyHome',
            drawerIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={20}
                    style={{color: tintColor}}
                ></Ionicons>
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'MyProfile',
            drawerIcon: ({tintColor}) => (
                <Ionicons
                    name={'ios-person'}
                    size={20}
                    style={{color: tintColor}}
                ></Ionicons>
            ),
        },
    }
});

export default RootDrawer;