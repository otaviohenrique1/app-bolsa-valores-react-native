import React from 'react';
// import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
  // const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.botao_favorito_box}>
          <BotaoFavorito favoritado={props.data.favorito} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.texto}>{props.data.nome_empresa}</Text>
          <Text style={styles.texto}>{props.data.codigo_empresa}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.texto}>${props.data.valor_acao}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.texto}>${props.data.valor_variacao_dinheiro}</Text>
          <Text style={styles.texto}>({props.data.porcentagem})</Text>
        </View>
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
    margin: 10
  },
  botao_favorito_box: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});