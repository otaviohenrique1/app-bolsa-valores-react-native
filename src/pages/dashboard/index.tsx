import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../../components/Header';
import { RoutesTabsDashboard } from '../routes';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <RoutesTabsDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
});