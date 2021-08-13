import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SemDados() {
  return (
    <View style={styles.containerListaVazia}>
      <Text>Lista vazia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerListaVazia: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});