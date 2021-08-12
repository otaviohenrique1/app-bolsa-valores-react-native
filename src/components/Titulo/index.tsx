import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

interface TituloProps {
  texto: string;
}

export function Titulo(props: TituloProps) {
  return (
    <Text style={styles.titulo}>
      {props.texto}
    </Text>
  );
}

export function TituloFavoritos(props: TituloProps) {
  return (
    <View style={styles.tituloContainer}>
      <AntDesign
        name='star'
        size={30}
        color='#0047BB'
        style={styles.tituloIcone}
      />
      <Titulo texto={props.texto} />
    </View>
  );
}

export function TituloEmpresasRecentes(props: TituloProps) {
  return (
    <View style={styles.tituloContainer}>
      <Image
        source={require('../../assets/images/stats_graph.png')}
        style={styles.tituloImagem}
      />
      <Titulo texto={props.texto} />
    </View>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tituloImagem: {
    marginRight: 5,
    width: 30,
    height: 30
  },
  tituloIcone: {
    marginRight: 5,
  },
  titulo: {
    fontSize: 30
  },
});