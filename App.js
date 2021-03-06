import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListScreen from './Screens/ListScreen';
import Header from './components/Header';
import SortedScreen from './Screens/SortedScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  ListScreen: ListScreen,
  SortedScreen: SortedScreen,
});

const AppContainer = createAppContainer(AppNavigator);
