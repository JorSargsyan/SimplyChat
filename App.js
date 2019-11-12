import React , {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ChatScreen from "./src/components/chatScreen/index";

const App = () => {
  return (
    <SafeAreaView>
      <ChatScreen />
    </SafeAreaView>
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

