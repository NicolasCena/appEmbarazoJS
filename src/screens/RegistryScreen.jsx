import React, { useState,  useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { TextValidationPassword } from '../components/textValidationPassword';
import { InputRegister } from '../components/inputRegister';


export const RegistryScreen = () => {

  const [ emailFlag, setEmailFlag ] = useState(false);
  const [ emailFlagData, setEmailFlagData ] = useState('');

  const [ passwordlFlag, setPasswordlFlag ] = useState(false);
  const [ captchalFlag, setCaptchalFlag ] = useState(false);

  const CheckEmail = (item) => {
    console.log(item)

  }

  return (
    <SafeAreaView style={{ marginTop: 100}}>
      <View style={{ margin: 20}}>
        <Text style={{ color: 'black'}}>RegistryScreen</Text>

        <InputRegister campoTexto="Nombre/s" tipoDeInput={<TextInput style={ styles.input } />}/>

        <InputRegister campoTexto="Apellido/s" tipoDeInput={<TextInput style={ styles.input } />}/>

        <InputRegister campoTexto="Email" tipoDeInput={<TextInput style={ styles.input } />}/>

        <InputRegister 
          campoTexto="Repetir Email" 
          tipoDeInput={<TextInput 
            style={ styles.input } 
            onChangeText={(item) => CheckEmail(item)} 
            autoComplete='off' 
            keyboardType='email-address'/>}
        />
        
        <InputRegister campoTexto="Contraseña" tipoDeInput={<TextInput style={ styles.input } />}/>

        <InputRegister campoTexto="Repetir Contraseña" tipoDeInput={<TextInput style={ styles.input } />}/>
        
        <TextValidationPassword Texto="hola" icono="information-circle-outline"/>
        <TextValidationPassword Texto="hola" icono="information-circle-outline"/>
        <TextValidationPassword Texto="hola" icono="information-circle-outline"/>
        <TextValidationPassword Texto="hola" icono="information-circle-outline"/>


      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 5,
    position: 'relative',
    color: 'black'
  },
})