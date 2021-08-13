import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import * as Yup from "yup";
import { Formik } from "formik";
import { MensagemErroCampoObrigatorio, MensagemErroTexto } from '../../utils/utils';
import { BotaoFormulario } from '../../components/Botao';
import { CampoFormulario, MensagemErro } from '../../components/Campo';

type NavigationProps = { 
  navigation: StackNavigationProp<RootStackParamList>;
}

interface FormValues {
  email: string;
  senha: string;
}

export function Login({navigation}: NavigationProps) {
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(MensagemErroTexto('Digite um email valido'))
      .required(MensagemErroCampoObrigatorio('email')),
    senha: Yup
      .string()
      .min(8, MensagemErroTexto('Minimo de 8 caracteres'))
      .max(32, MensagemErroTexto('Maximo de 32 caracteres'))
      .required(MensagemErroCampoObrigatorio('senha')),
  });

  const initialValues: FormValues = {
    email: '',
    senha: ''
  };

  function handleSubmitForm(values: FormValues) {
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched }) => (
          <View>
            <View style={styles.camposContainer}>
              <CampoFormulario
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                styleCampo={{ marginTop: 50 }}
                placeholder={'Email'}
                erro={(errors.email && touched.email) ? (
                  <MensagemErro mensagemErro={errors.email}/>
                ) : null}
              />
              <CampoFormulario
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
                styleCampo={{ marginTop: 50 }}
                secureTextEntry
                placeholder={'Senha'}
                erro={(errors.senha && touched.senha) ? (
                  <MensagemErro mensagemErro={errors.senha}/>
                ) : null}
              />
            </View>
            <View style={styles.botoesContainer}>
              <BotaoFormulario
                texto='Entrar'
                botaoCor='#add8e6'
                botaoTextoCor='#000000'
                onPress={handleSubmit}
              />
              <View style={{ marginHorizontal: 10 }}>
                <BotaoFormulario
                  texto='Limpar'
                  botaoCor='#ff9999'
                  botaoTextoCor='#000000'
                  onPress={resetForm}
                />
              </View>
              <BotaoFormulario
                texto='Novo'
                botaoCor='#00e68a'
                botaoTextoCor='#000000'
                onPress={() => navigation.navigate('Cadastro')}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 50
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camposContainer: {
    marginBottom: 100,
  }
});
