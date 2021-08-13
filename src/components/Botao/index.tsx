import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, ColorValue, GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";

interface BotaoProps {
  onPress?: ((event: GestureResponderEvent) => void);
}

interface BotaoFavoritoProps extends BotaoProps {
  favoritado?: boolean;
}

export function BotaoFavorito(props: BotaoFavoritoProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.favoritado) {
      setIsActive(props.favoritado);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <AntDesign
        onPress={() => setIsActive(!isActive)}
        name={(isActive) ? "star" : "staro"}
        size={40}
      />
    </TouchableOpacity>
  );
}

export function BotaoRemover(props: BotaoProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Foundation
        name={"trash"}
        size={40}
      />
    </TouchableOpacity>
  );
}

interface BotaoFormularioProps extends BotaoProps {
  texto: string;
  botaoCor: ColorValue;
  botaoTextoCor: ColorValue;
}

export function BotaoFormulario(props: BotaoFormularioProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.botao, {
        backgroundColor: props.botaoCor
      }]}
    >
      <Text
        style={[ styles.botaoTexto, {
          color: props.botaoTextoCor
        }]}
      >
        {props.texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 15,
    width: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 25,
  },
});
