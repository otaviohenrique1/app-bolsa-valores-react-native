import React from 'react';
import { Image, StyleSheet, Text, View, } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.dashboard}>
        <Image
          source={require('../../assets/images/icon_home.png')}
          style={styles.logo}
        />
        <Text style={styles.header_titulo}>Dashboard</Text>
      </View>
      <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'flex-start',
  },
  header_titulo: {
    fontSize: 30,
  },
  dashboard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  }
});
