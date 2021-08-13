import React from 'react';
import { View, Text, StyleSheet, Image, GestureResponderEvent } from 'react-native';
import { corrigeValor } from '../../utils/utils';
import { BotaoFavorito } from '../Botao';

interface AreaDadosEmpresaProps {
  data: {
    favorito: boolean;
    nome_empresa: string;
    codigo_empresa: string;
    porcentagem: number;
    valor_acao: number;
    valor_variacao_dinheiro: number;
  },
  onPress?: ((event: GestureResponderEvent) => void);
}

export function AreaDadosEmpresa(props: AreaDadosEmpresaProps) {
  let favoritado = props.data.favorito || false;
  let nomeEmpresa = props.data.nome_empresa || '---';
  let codigoEmpresa = props.data.codigo_empresa || '---';
  let valorAcao = props.data.valor_acao || 0;
  let valorVariacaoDinheiro = props.data.valor_variacao_dinheiro || 0;
  let porcentagem = props.data.porcentagem || 0;
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.botao_favorito_box, { marginRight: 10 }]}>
          <BotaoFavorito
            favoritado={favoritado}
            onPress={props.onPress}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.texto}>{nomeEmpresa}</Text>
          <Text style={styles.texto}>{codigoEmpresa}</Text>
        </View>
      </View>
      <ValorAcao
        valor_acao={valorAcao}
        valor_variacao_dinheiro={valorVariacaoDinheiro}
        porcentagem={porcentagem}
      />
    </View>
  );
}

interface ValorAcaoProps {
  valor_acao: number;
  valor_variacao_dinheiro: number;
  porcentagem: number;
}

function ValorAcao(props: ValorAcaoProps) {
  let valor = Math.sign(props.porcentagem);
  const verificaSeValorForPositivo = valor === 1;
  const verificaSeValorForNegativo = valor === -1;

  let imagem_seta_grafico = 
  ((verificaSeValorForPositivo) && require('../../assets/images/graph_up.png')) ||
  ((verificaSeValorForNegativo) && require('../../assets/images/graph_down.png')) || "";

  let cor = ((verificaSeValorForPositivo) && '#79C300') ||
    ((verificaSeValorForNegativo) && '#D64B45') || "#000000";

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ alignItems: 'flex-end' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={imagem_seta_grafico}
            style={{ width: 24, height: 15, marginRight: 5 }}
          />
          <Text style={styles.texto}>${corrigeValor(props.valor_acao)}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.texto, { color: cor, marginRight: 5 }]}>
          ${corrigeValor(props.valor_variacao_dinheiro)}
        </Text>
        <Text style={[styles.texto, { color: cor }]}>
          ({corrigeValor(props.porcentagem)}%)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  texto: {
    fontSize: 20,
    // margin: 10
  },
  botao_favorito_box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});