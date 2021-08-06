import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, GestureResponderEvent } from 'react-native';

interface CampoProps {
  placeholder?: string;
  onPress?: ((event: GestureResponderEvent) => void);
  value?: string;
  onChangeText?: ((text: string) => void);
}

export function CampoBusca(props: CampoProps) {
  return (
    <View style={styles_campo_busca.campo_busca_container}>
      <TextInput
        placeholder={props.placeholder}
        style={styles_campo_busca.campo_busca}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity
        style={styles_campo_busca.campo_busca_botao}
        onPress={props.onPress}
      >
        <Image
          source={require('../../assets/images/search.png')}
          style={styles_campo_busca.campo_busca_botao_imagem}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles_campo_busca = StyleSheet.create({
  campo_busca_container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campo_busca: {
    width: 'auto',
    fontSize: 30,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  campo_busca_botao: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campo_busca_botao_imagem: {
    width: 40,
    height: 40,
  },
});