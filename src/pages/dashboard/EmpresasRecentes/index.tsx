import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function EmpresasRecentes() {

  return (
    <View style={styles.container}>
      <Text>Empresas Recentes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});