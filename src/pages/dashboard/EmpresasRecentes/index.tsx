import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Item } from '../../../components/Item';
import { favoritos } from '../../../utils/apis/api_favoritos';

interface ItemListaFavoritoProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favorito?: boolean;
}

export function EmpresasRecentes() {
  return (
    <View style={styles.container}>
      <TituloFavoritos texto='Empresas recentes' />
      <View style={styles.containerFavoritos}>
        <FlatList<ItemListaFavoritoProps>
          data={favoritos}
          keyExtractor={(item) => item.codigo_empresa}
          renderItem={({ item }) => {
            return <Item
              exibeBotaoFavorito={true}
              codigo_empresa={item.codigo_empresa}
              nome_empresa={item.nome_empresa}
              porcentagem={item.porcentagem}
              favoritado={item.favorito}
            />
          }}
        />
      </View>
    </View>
  );
}

interface TituloFavoritosProps {
  texto: string;
}

function TituloFavoritos(props: TituloFavoritosProps) {
  return (
    <View style={styles.tituloContainer}>
      <Image
        source={require('../../../assets/images/stats_graph.png')}
        style={styles.tituloIcone}
      />
      <Text style={styles.titulo}>
        {props.texto}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    width: 'auto',
    paddingHorizontal: 10,
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tituloIcone: {
    marginRight: 5,
    width: 30,
    height: 30
  },
  titulo: {
    fontSize: 30
  },
  containerFavoritos: {
    flex: 1,
  }
});