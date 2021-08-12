import React from 'react';
import { View, StyleSheet, Text, Image, GestureResponderEvent } from 'react-native';
import { BotaoFavorito, BotaoRemover } from '../Botao';
import AntDesign from "react-native-vector-icons/AntDesign";

interface ItemProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favoritado?: boolean;
  exibeSeItemFoiFavorito?: boolean;
  exibeBotaoRemover?: boolean;
  onPressBotaoFavorito?: ((event: GestureResponderEvent) => void) ;
  onPressBotaoRemover?: ((event: GestureResponderEvent) => void) ;
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
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {(props.exibeSeItemFoiFavorito) && (
          <View style={{ marginRight: 10 }}>
            {(props.favoritado) ? (
              <AntDesign name={'star'} size={30} />
            ) : (
              <AntDesign name={'staro'} size={30} />
            )}
          </View>
        )}
        <Image
          source={require('../../assets/images/icone_empresa.png')}
          style={{ width: 36, height: 36, marginRight: 10 }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.texto}>{props.codigo_empresa}</Text>
          <Text style={styles.texto}>{props.nome_empresa}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={imagem_seta_grafico}
          style={{ width: 24, height: 15, marginRight: 5 }}
        />
        <Text style={[styles.texto, { color: cor }]}>
          {((verificaSeValorForPositivo) && '+')}
          {(props.porcentagem).toFixed(2)}%
        </Text>
        {(props.exibeBotaoRemover) && (
          <View style={{ marginLeft: 15 }}>
            <BotaoRemover onPress={props.onPressBotaoRemover} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
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
