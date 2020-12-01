import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{backgroundColor: 'yellow', height: 54, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Orders</Text>
          </View>
        <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Help</Text>
        </View>
        <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Inbox</Text>
        </View>
        <View style={{backgroundColor: 'brown', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});