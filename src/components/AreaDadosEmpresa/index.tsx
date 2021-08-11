import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BotaoFavorito } from '../Botao';

interface AreaDadosEmpresaProps {
  data: {
    favorito: boolean;
    nome_empresa: string;
    codigo_empresa: string;
    porcentagem: number;
    valor_acao: number;
    valor_variacao_dinheiro: number;
  }
}

export function AreaDadosEmpresa(props: AreaDadosEmpresaProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.botao_favorito_box, { marginRight: 10 }]}>
          <BotaoFavorito favoritado={props.data.favorito} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.texto}>{props.data.nome_empresa}</Text>
          <Text style={styles.texto}>{props.data.codigo_empresa}</Text>
        </View>
      </View>
      <ValorAcao
        valor_acao={props.data.valor_acao}
        valor_variacao_dinheiro={props.data.valor_variacao_dinheiro}
        porcentagem={props.data.porcentagem}
      />
    </View>
  );
}

interface VariacaoDinheiroPorcentagemBoxProps {
  valor_acao: number;
  valor_variacao_dinheiro: number;
  porcentagem: number;
}

function ValorAcao(props: VariacaoDinheiroPorcentagemBoxProps) {
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
          <Text style={styles.texto}>${props.valor_acao}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.texto, { color: cor, marginRight: 5 }]}>
          ${props.valor_variacao_dinheiro}
        </Text>
        <Text style={[styles.texto, { color: cor }]}>
          ({props.porcentagem}%)
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