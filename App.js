import React , {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ChatScreen from "./src/components/ChatScreen";
import FriendsList from "./src/components/FriendList";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";


const AppContainer = createAppContainer(
  createStackNavigator({
    FriendsList : {
      screen : FriendsList,
      navigationOptions : {
        headerTitle : "Friends List"
      }
    },
    ChatScreen : {
      screen : ChatScreen
    }
  },{
    headerMode: 'float',
    headerTransitionPreset: 'fade-in-place',
    headerLayoutPreset: 'center',
  })
)


const App = () => {
  return (
      <AppContainer/>
  )
}

export default App


const styles = StyleSheet.create({
  root :  {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})

