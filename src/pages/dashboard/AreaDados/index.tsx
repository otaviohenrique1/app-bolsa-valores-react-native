import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { AreaDadosEmpresa } from '../../../components/AreaDadosEmpresa';
import { CampoBusca } from '../../../components/Campo';
import { Grafico } from '../../../components/Grafico';
import { removeEmpresaRecente, setEmpresaRecente } from '../../../features/empresa_recente/empresaRecenteSlice';
import { favoritos } from '../../../utils/apis/api_favoritos';
import { DataEmpresa, DataEmpresaInitialData, DataGrafico, DataProps } from '../../../utils/utils';

export function AreaDados() {
  // const dataEmpresa = {
  //   favorito: true,
  //   nome_empresa: "Starbucks",
  //   codigo_empresa: "SBUX",
  //   porcentagem: -2.01,
  //   valor_acao: 55.42,
  //   valor_variacao_dinheiro: -9.21,
  // };

  // const dataGrafico = [
  //   {name: 'Page A', uv: 100, pv: 2400, amt: 2400},
  //   {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
  //   {name: 'Page C', uv: 400, pv: 2400, amt: 2400},
  //   {name: 'Page D', uv: 300, pv: 2400, amt: 2400},
  //   {name: 'Page E', uv: 600, pv: 2400, amt: 2400},
  //   {name: 'Page F', uv: 500, pv: 2400, amt: 2400},
  // ];

  const [codigoEmpresaBuscada, setCodigoEmpresaBuscada] = useState<string>('');
  const [dataEmpresa, setDataEmpresa] = useState<DataEmpresa>(DataEmpresaInitialData);
  const [dataGrafico, setDataGrafico] = useState<DataGrafico[]>([]);

  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  async function handleSubmitForm() {
    let resultadoEmpresaBuscada = favoritos.find((item) => {
      return item.codigo_empresa === codigoEmpresaBuscada;
    });

    setTimeout(() => {
      if (resultadoEmpresaBuscada) {
        setDataEmpresa({
          codigo_empresa: resultadoEmpresaBuscada.codigo_empresa,
          nome_empresa: resultadoEmpresaBuscada.nome_empresa,
          favorito: resultadoEmpresaBuscada.favorito,
          porcentagem: resultadoEmpresaBuscada.porcentagem,
          valor_acao: resultadoEmpresaBuscada.valor_acao,
          valor_variacao_dinheiro: resultadoEmpresaBuscada.valor_variacao_dinheiro,
        });
        setDataGrafico(resultadoEmpresaBuscada.data);
  
        let validaSeEmpresaEstaNaLista = selector.empresaRecente.empresas_recentes.find((item) => {
          return resultadoEmpresaBuscada?.codigo_empresa === item.codigo_empresa;
        });
  
        let buscaSeItemFoiFavoritado = selector.favorito.favoritos.find((item) => {
          return resultadoEmpresaBuscada?.codigo_empresa === item.codigo_empresa;
        });
  
        let novaEmpresaRecente = {
          favorito: buscaSeItemFoiFavoritado?.favorito || false,
          nome_empresa: resultadoEmpresaBuscada.nome_empresa,
          codigo_empresa: resultadoEmpresaBuscada.codigo_empresa,
          porcentagem: resultadoEmpresaBuscada.porcentagem,
        };
        
        if (validaSeEmpresaEstaNaLista) {
          dispatch(removeEmpresaRecente(novaEmpresaRecente));
          dispatch(setEmpresaRecente(novaEmpresaRecente));
        } else {
          dispatch(setEmpresaRecente(novaEmpresaRecente));
        }
      } else {
        alert('Codigo não encontrado');
      }
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.campoBuscaBox}>
        <CampoBusca
          placeholder='Codigo da empresa'
          value={codigoEmpresaBuscada}
          onChangeText={setCodigoEmpresaBuscada}
          onPress={handleSubmitForm}
        />
      </View>
      <AreaDadosEmpresa
        data={dataEmpresa}
        onPress={() => {}}
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
  campoBuscaBox: {
    marginVertical: 10,
  }
});
