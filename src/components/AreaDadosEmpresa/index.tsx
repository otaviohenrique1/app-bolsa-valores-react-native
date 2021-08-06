import React from 'react';
// import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      <Text style={styles.texto}>{(props.data.favorito) ? 'true' : 'false'}</Text>
      <Text style={styles.texto}>{props.data.nome_empresa}</Text>
      <Text style={styles.texto}>{props.data.codigo_empresa}</Text>
      <Text style={styles.texto}>{props.data.porcentagem}</Text>
      <Text style={styles.texto}>{props.data.valor_acao}</Text>
      <Text style={styles.texto}>{props.data.valor_variacao_dinheiro}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    marginHorizontal: 20,
  },
  texto: {
    fontSize: 20
  }
});