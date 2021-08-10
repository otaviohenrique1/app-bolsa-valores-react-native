import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RoutesStack } from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RoutesStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
});