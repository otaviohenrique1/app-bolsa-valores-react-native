import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

type NavigationProps = { 
  navigation: StackNavigationProp<RootStackParamList>;
}

export function Login({navigation}: NavigationProps) {
    return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title='Dashboard'
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title='Novo Usuario'
        onPress={() => navigation.navigate('Cadastro')}
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