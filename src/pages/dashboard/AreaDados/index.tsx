import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AreaDadosEmpresa } from '../../../components/AreaDadosEmpresa';
import { CampoBusca } from '../../../components/Campo';
import { Grafico } from '../../../components/Grafico';

export function AreaDados() {
  const dataEmpresa = {
    favorito: true,
    nome_empresa: "Starbucks",
    codigo_empresa: "SBUX",
    porcentagem: -2.01,
    valor_acao: 55.42,
    valor_variacao_dinheiro: -9.21,
  };

  const dataGrafico = [
    {name: 'Page A', uv: 100, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page E', uv: 600, pv: 2400, amt: 2400},
    {name: 'Page F', uv: 500, pv: 2400, amt: 2400},
  ];

  return (
    <View style={styles.container}>
      <CampoBusca
        placeholder='Codigo da empresa'
      />
      <AreaDadosEmpresa
        data={dataEmpresa}
      />
      <Grafico
        data={dataGrafico}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
});