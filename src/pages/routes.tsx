import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { AreaDados } from './Dashboard/AreaDados';
import { EmpresasRecentes } from './Dashboard/EmpresasRecentes';
import { Favoritos } from './Dashboard/Favoritos';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Login } from './Login';
import { Cadastro } from './Cadastro';
import { Dashboard } from './Dashboard';

export type RootStackParamList = { 
  Login: undefined;
  Cadastro: undefined;
  Dashboard: undefined;
}

export function RoutesStack() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export function RoutesTabsDashboard() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          if (route.name === 'AreaDados') {
            return <Foundation
                name={'graph-trend'}
                size={size}
                color={(focused) ? 'tomato' : 'gray'}
              />;
          } else if (route.name === 'EmpresasRecentes') {
            return <FontAwesome
              name={'building'}
              size={size}
              color={(focused) ? 'tomato' : 'gray'}
            />;
          } else if (route.name === 'Favoritos') {
            return <AntDesign
              name={'star'}
              size={size}
              color={(focused) ? 'tomato' : 'gray'}
            />;
          }
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="AreaDados" component={AreaDados} />
      <Tab.Screen name="EmpresasRecentes" component={EmpresasRecentes} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
    </Tab.Navigator>
  );
}
