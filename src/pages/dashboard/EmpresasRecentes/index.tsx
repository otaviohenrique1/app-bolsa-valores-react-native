import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Item } from '../../../components/Item';
import { TituloEmpresasRecentes } from '../../../components/Titulo';
import { favoritos } from '../../../utils/apis/api_favoritos';

interface ItemListaEmpresasRecentesProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favorito?: boolean;
}

export function EmpresasRecentes() {
  const [data, setData] = useState<ItemListaEmpresasRecentesProps[]>([]);

  useEffect(() => {
    setData(favoritos);
  }, []);

  return (
    <View style={styles.container}>
      <TituloEmpresasRecentes texto='Empresas recentes' />
      <View style={styles.containerFavoritos}>
        <FlatList<ItemListaEmpresasRecentesProps>
          data={data}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    width: 'auto',
    paddingHorizontal: 10,
  },
  containerFavoritos: {
    flex: 1,
  }
});