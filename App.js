// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import GoogleFit from "./GoogleFit";


export default function App() {
  return (
    <NavigationContainer>
      <GoogleFit />
    </NavigationContainer>
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
