/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class lifedash extends Component {

constructor(props){
  super(props);
  this.state={
    selectedTab: 'prices'
  }
}

  render() {
    return (
      <View style={styles.container}>

        <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">

        <TabBarIOS.Item
            title="Feed"
            selected={this.state.selectedTab == 'Ideas'}
            icon={{uri: 'Inbox'}}
            onPress={()=> this.setState({selectedTab: 'Ideas'})}
            >
            <Text>
            Placeholder for idea List
            </Text>
        </TabBarIOS.Item>

        </TabBarIOS>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('lifedash', () => lifedash);
