import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Item } from '../../../components/Item';
import { SemDados } from '../../../components/SemDados';
import { TituloEmpresasRecentes } from '../../../components/Titulo';
import { DataProps } from '../../../utils/utils';
// import { favoritos } from '../../../utils/apis/api_favoritos';

export function EmpresasRecentes() {
  const [data, setData] = useState<DataProps[]>([]);

  const selector = useSelector((state: RootState) => state);

  useEffect(() => {
    // setData(favoritos);
    setData(selector.empresaRecente.empresas_recentes);
  }, [selector.empresaRecente.empresas_recentes]);

  return (
    <View style={styles.container}>
      <TituloEmpresasRecentes texto='Empresas recentes' />
      <View style={styles.containerFavoritos}>
        {(data) ? (
          <FlatList<DataProps>
            data={data}
            keyExtractor={(item) => item.codigo_empresa}
            renderItem={({ item }) => {
              return <Item
                exibeSeItemFoiFavorito={true}
                codigo_empresa={item.codigo_empresa}
                nome_empresa={item.nome_empresa}
                porcentagem={item.porcentagem}
                favoritado={item.favorito}
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