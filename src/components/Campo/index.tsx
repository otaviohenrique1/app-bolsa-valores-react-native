import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData, StyleProp, TextStyle, Text } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface CampoProps {
  placeholder?: string;
  value?: string;
  onChangeText?: ((text: string) => void);
}

interface CampoBuscaProps extends CampoProps {
  onPress?: ((event: GestureResponderEvent) => void);
}

export function CampoBusca(props: CampoBuscaProps) {
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
        {/* <Image
          source={require('../../assets/images/search.png')}
          style={styles_campo_busca.campo_busca_botao_imagem}
        /> */}
        <FontAwesome name='search' size={24} color='#ffffff' />
      </TouchableOpacity>
    </View>
  );
}

interface CampoFormularioProps extends CampoProps {
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  secureTextEntry?: boolean
  erro: any;
  styleCampo?: StyleProp<TextStyle>;
}

export function CampoFormulario(props: CampoFormularioProps) {
  return (
    <View style={props.styleCampo}>
      <TextInput
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        placeholder={props.placeholder}
        style={styles_campo_formulario.campo}
        secureTextEntry={props.secureTextEntry}
      />
      {props.erro}
    </View>
  );
}

interface MensagemErroProps {
  mensagemErro: string;
}

export function MensagemErro(props: MensagemErroProps) {
  return (
    <View style={styles_mensagem_erro.mensagemErroContainer}>
      <Text style={styles_mensagem_erro.mensagemErroTexto}>
        {props.mensagemErro}
      </Text>
    </View>
  );
}

const styles_mensagem_erro = StyleSheet.create({
  mensagemErroContainer: {
    borderBottomColor: '#ffb3b3',
    backgroundColor: '#ffb3b3',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 10,
  },
  mensagemErroTexto: {
    fontSize: 20,
  }
});

const styles_campo_formulario = StyleSheet.create({
  campo: {
    width: 'auto',
    fontSize: 30,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});

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
  // campo_busca_botao_imagem: {
  //   width: 40,
  //   height: 40,
  // },
});