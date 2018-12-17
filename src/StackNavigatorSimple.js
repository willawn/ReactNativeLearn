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
//1. 导入文件
// import {StackNavigator} from 'react-navigation';
// import HomeScreen from './HomeScreen';
// import DetailsPage from './Details';

//2. 编写页面
// const HomeScreen = ({navigation}) => (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Home Screen</Text>
//         <Button
//             onPress={() => navigation.navigate('Details')}
//             title='Go to Details'
//         ></Button>
//     </View>
// );

//另一种代码方式写法
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Go to Details2',
    };
    render() {
        const {navigate} = this.props.navigation;
        return  (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={()=>navigate('Details')}
                    title='Go to Details2'>
                </Button>
            </View>
        );
    }
}

// const Details = () => (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Details Screen</Text>
//     </View>
// );

// class Details extends Component {
//     static navigationOptions = {
//         title: 'Go to Details2',
//     };
//     render(){
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>Details Screen333</Text>
//             </View>
//         );
//     }
// }

//3.创建StackNavigator
// const RootNavigator = StackNavigator({
//     Home: {
//         screen: HomeScreen,
//         //4. 添加标题
//         navigationOptions: {
//             headerTitle: 'home',
//         },
//     },
//     Details: {
//         screen: DetailsPage,
//         navigationOptions: {
//             headerTitle: 'details',
//         },
//     }
// });
// export default RootNavigator;