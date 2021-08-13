import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Item } from '../../../components/Item';
import { TituloFavoritos } from '../../../components/Titulo';
// import { favoritos } from '../../../utils/apis/api_favoritos';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { DataProps } from '../../../utils/utils';
import { SemDados } from '../../../components/SemDados';

export function Favoritos() {
  const [data, setData] = useState<DataProps[]>([]);

  const selector = useSelector((state: RootState) => state);

  useEffect(() => {
    // let itensFavoritados = favoritos.filter((item) => {
    //   return item.favorito === true;
    // });

    // if (itensFavoritados) {
    //   setData(itensFavoritados);
    // }
    setData(selector.favorito.favoritos);
  }, [selector.favorito.favoritos]);
  
  return (
    <View style={styles.container}>
      <TituloFavoritos texto='Empresas favoritas' />
      <View style={styles.containerFavoritos}>
        {(data) ? (
          <FlatList<DataProps>
          data={data}
          keyExtractor={(item) => item.codigo_empresa}
          renderItem={({ item }) => {
            return <Item
              codigo_empresa={item.codigo_empresa}
              nome_empresa={item.nome_empresa}
              porcentagem={item.porcentagem}
              favoritado={item.favorito}
              exibeBotaoRemover={true}
            />
          }}
        />
        ) : (
          <SemDados />
        )}
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
  },
});