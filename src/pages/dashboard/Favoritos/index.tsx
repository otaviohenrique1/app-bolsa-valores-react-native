import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Item } from '../../../components/Item';
import { favoritos } from '../../../utils/apis/api_favoritos';

interface ItemListaFavoritoProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favorito?: boolean;
}

export function Favoritos() {

  return (
    <View style={styles.container}>
      <TituloFavoritos texto='Empresas favoritas' />
      <View style={styles.containerFavoritos}>
        <FlatList<ItemListaFavoritoProps>
          data={favoritos}
          keyExtractor={(item) => item.codigo_empresa}
          renderItem={({ item }) => {
            return <Item
              exibeBotaoFavorito={false}
              codigo_empresa={item.codigo_empresa}
              nome_empresa={item.nome_empresa}
              porcentagem={item.porcentagem}
              favoritado={item.favorito}
              exibeBotaoRemover={true}
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
      <AntDesign
        name='star'
        size={30}
        color='#0047BB'
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
    justifyContent: 'flex-start',
    width: 'auto',
    paddingHorizontal: 10,
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tituloIcone: {
    marginRight: 5
  },
  titulo: {
    fontSize: 30
  },
  containerFavoritos: {
    flex: 1,
  }
});