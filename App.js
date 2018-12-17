/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {FlatList, Alert, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from "react-navigation";
import FlatListSimple from "./src/FlatListSimple";
import StackNavigatorSimple from "./src/StackNavigatorSimple";
import DrawerNavigatorSimple from "./src/DrawerNavigatorSimple";
import TabNavigatorSimple from "./src/TabNavigatorSimple";
import Details from "./src/Details";
import SectionListSimple from "./src/SectionListSimple";
import ScrollViewSimple from "./src/ScrollViewSimple";
import NetworkSimple from "./src/NetworkSimple";

class FlatListBasics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sourceData : [],
            // selected: (new Map(): Map<String, boolean>),
            refreshing: false
        }
    }

    // 自定义分割线
    _renderItemSeparatorComponent = ({highlighted}) => (
        <View style={{ height:1, backgroundColor:'#000' }}></View>
    );

    // 空布局
    _renderEmptyView = () => (
        <View><Text>EmptyView</Text></View>
    );

    // 下拉刷新
    _renderRefresh = () => {
        this.setState({refreshing: true}) // 开始刷新
        // 这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            // TODO 提示没有可刷新的内容！
            this.setState({refreshing: false});
        }, 3000);
    };

    // 上拉加载更多
    _onEndReached = () => {
        // // 以下是制造新数据
        // let newData = [];
        //
        // for (let i = 20; i < 30; i ++) {
        //     let obj = {
        //         id: i
        //         ,title: i + '生了只小柯基'
        //     };
        //
        //     newData.push(obj);
        // }
        //
        // // 将新数据添加到数据容器中
        // this.dataContainer = this.dataContainer.concat(newData);
        // // 将新数据集合赋予数据状态并更新页面
        // this.setState({
        //     sourceData: this.dataContainer
        // });
    };

    _renderItem = ({item}) =>{
        // return(
        //     <FlatListItem
        //         id={item.id}
        //         onPressItem={ this._onPressItem }
        //         selected={ !!this.state.selected.get(item.id) }
        //         title={ item.title }
        //     />
        // );
        return(
            <View style={{flexDirection:'row'}}>
                <Button title={item.key} onPress={()=>this.clickItem(item)}></Button>
            </View>
        );
    };

    /**
     * item的点击事件
     *
     * @param item
     */
    clickItem(item) {
        const {navigate} = this.props.navigation;
        navigate(item.path);
    }

    // _onPressItem = (id : string) => (
    //     // updater functions are preferred for transactional updates
    //     // this.setState((state) => {
    //     //     // copy the map rather than modifying state.
    //     //     const selected = new Map(state.selected);
    //     //     selected.set(id, !selected.get(id)); // toggle
    //     //     return {selected};
    //     // })
    //     Alert.alert("aaa")
    //     //渲染时候的onPressItem
    //     //this.props.onPressItem(id)
    // );

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={[
                        {key: 'FlatList组件', path:'FlatListSimple'},
                        {key: 'StackNavigator组件', path:'StackNavigatorSimple'},
                        {key: 'DrawerNavigator组件', path:'DrawerNavigatorSimple'},
                        {key: 'TabNavigator组件', path:'TabNavigatorSimple'},
                        {key: 'SectionList组件', path:'SectionListSimple'},
                        {key: 'ScrollView组件', path:'ScrollViewSimple'},
                        {key: '网络请求', path:'NetworkSimple'},
                    ]}

                    //renderItem={({item}) =><Button title={item.key} onPress={(item)=>Alert.alert(item.path)}></Button>}
                    renderItem={this._renderItem.bind(this)}
                    // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                    onEndReachedThreshold={0.1}
                    // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                    onEndReached={ this._onEndReached }
                    ItemSeparatorComponent={ this._renderItemSeparatorComponent }
                    ListEmptyComponent={ this._renderEmptyView }
                    refreshing={ this.state.refreshing }
                    onRefresh={ this._renderRefresh }
                    // 是一个可选的优化，用于避免动态测量内容，+1是加上分割线的高度
                    getItemLayout={(data, index) => ( { length: 40, offset: (40 + 1) * index, index } )}
                />
            </View>
        );
    }
}

// class Details extends React.Component {
//     static navigationOptions = {
//         title: 'Go to Details2',
//     };
//     render() {
//         const {navigate} = this.props.navigation;
//         return  (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>Details Screen</Text>
//             </View>
//         );
//     }
// }

const RootNavigator = StackNavigator({
    Home: {
        screen: FlatListBasics,
        //4. 添加标题
        navigationOptions: {
            headerTitle: 'React Native Learn',
        },
    },
    FlatListSimple: {
        screen: FlatListSimple,
        navigationOptions: {
            headerTitle: 'FlatListSimple',
        },
    },
    StackNavigatorSimple: {
        screen: StackNavigatorSimple,
        navigationOptions: {
            headerTitle: 'StackNavigatorSimple',
        },
    },
    DrawerNavigatorSimple: {
        screen: DrawerNavigatorSimple,
        navigationOptions: {
            headerTitle: 'DrawerNavigatorSimple',
        },
    },
    TabNavigatorSimple: {
        screen: TabNavigatorSimple,
        navigationOptions: {
            headerTitle: 'TabNavigatorSimple',
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            headerTitle: 'details',
        },
    },
    SectionListSimple: {
        screen: SectionListSimple,
    },
    ScrollViewSimple: {
        screen: ScrollViewSimple,
    },
    NetworkSimple: {
        screen: NetworkSimple,
    }
});
export default RootNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
