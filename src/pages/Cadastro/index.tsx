import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

type NavigationProps = { 
  navigation: StackNavigationProp<RootStackParamList>;
}

export function Cadastro({navigation}: NavigationProps) {
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <Button
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});