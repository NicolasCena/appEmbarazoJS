import React, { useState,  useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { TextValidationPassword } from '../components/textValidationPassword';
import { InputRegister } from '../components/inputRegister';


export const RegistryScreen = () => {

  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  const [ emailFlag, setEmailFlag ] = useState(false);
  const [ emailFlagData, setEmailFlagData ] = useState('');

  const [ passwordFlag, setPasswordFlag ] = useState('');
  const [ flagObject, setFlagObject ] = useState({
    mayuscula: false,
    minuscula: false,
    caracter: false,
    longitud: false,
    numero: false,
    samePass: false,
  })

  const CheckCondition = (pass, newpass) => {
    flagObject.mayuscula = pass.match(/[A-Z]/)
    flagObject.minuscula = pass.match(/[a-z]/)
    flagObject.caracter = pass.match(/[!@#$%^&*]/)
    flagObject.longitud = pass.length >= 8
    flagObject.numero = pass.match(/[0-9]/)
    console.log(pass.match(/[0-9]/))

    if(newpass === passwordFlag){
      setFlagObject({
        ...flagObject,
        samePass: true,
      })
    }else{
      setFlagObject({
        ...flagObject,
        samePass: false,
      })
    }
  };


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
        
        <InputRegister campoTexto="Contraseña" tipoDeInput={<TextInput style={ styles.input } onChangeText={(pass) => {CheckCondition(pass), setPasswordFlag(pass)}}/>}/>

        <InputRegister campoTexto="Repetir Contraseña" tipoDeInput={<TextInput style={{ ...styles.input, borderColor: flagObject.samePass ? 'green' : 'red' }} onChangeText={ (ete) => CheckCondition(passwordFlag, ete)} />}/>
        
        <TextValidationPassword Texto="Letra mayúscula" icono={flagObject.mayuscula ? 'checkmark-outline' : 'home'}/>
        <TextValidationPassword Texto="Letra mínuscula" icono={flagObject.minuscula ? 'checkmark-outline' : 'home'}/>
        <TextValidationPassword Texto="Simbolo" icono={flagObject.caracter? 'checkmark-outline' : 'home'}/>
        <TextValidationPassword Texto="Número" icono={flagObject.longitud? 'checkmark-outline' : 'home'}/>
        <TextValidationPassword Texto="Ocho carácteres" icono={flagObject.numero ? 'checkmark-outline' : 'home'}/>
        <TextValidationPassword Texto="Coinciden" icono={flagObject.samePass ? 'checkmark-outline' : 'home'}/>

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