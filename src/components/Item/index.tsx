import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface ItemProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favoritado?: boolean;
  exibeBotaoFavorito?: boolean;
}

export function Item(props: ItemProps) {
  let valor = Math.sign(props.porcentagem);
  const verificaSeValorForPositivo = valor === 1;
  const verificaSeValorForNegativo = valor === -1;

  let imagem_seta_grafico = 
  ((verificaSeValorForPositivo) && require('../../assets/images/graph_up.png')) ||
  ((verificaSeValorForNegativo) && require('../../assets/images/graph_down.png')) || "";

  let cor = ((verificaSeValorForPositivo) && '#79C300') ||
    ((verificaSeValorForNegativo) && '#D64B45') || "#000000";

  return (
    <View style={styles.itemContainer}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Image
          source={require('../../assets/images/icone_empresa.png')}
          style={{ width: 36, height: 36, marginRight: 10 }}
        />
        <View style={{
          flexDirection: 'column'
        }}>
          <Text style={styles.texto}>{props.codigo_empresa}</Text>
          <Text style={styles.texto}>{props.nome_empresa}</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Image
          source={imagem_seta_grafico}
          style={{ width: 24, height: 15, marginRight: 5 }}
        />
        <Text style={[styles.texto, { color: cor }]}>
          {((verificaSeValorForPositivo) && '+')}
          {(props.porcentagem).toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#2b253f',
    shadowRadius: 5,
    shadowOpacity: 5,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  texto: {
    fontSize: 20,
  }
});
