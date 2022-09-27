import React, { useState,  useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { TextValidationPassword } from '../components/textValidationPassword';
import { InputRegister } from '../components/inputRegister';


export const RegistryScreen = () => {

  const [ emailFlag, setEmailFlag ] = useState(false);
  const [ emailFlagData, setEmailFlagData ] = useState('');

  const [ passwordFlag, setPasswordFlag ] = useState('');
  const [ newPasswordFlag, setNewPasswordFlag ] = useState('');
  const [ flagObject, setFlagObject ] = useState({
    uppercase: false,
    lowercase: false,
    caracter: false,
    length: false,
    number: false,
    samePass: false,
  });
  const [ allTrue, setAllTrue ] = useState(false)

  const CheckCondition = () => {
    flagObject.uppercase = (/[A-Z]/).test(passwordFlag);
    flagObject.lowercase = (/[a-z]/).test(passwordFlag);
    flagObject.caracter = (/[!@#$%^&*]/).test(passwordFlag); 
    flagObject.length = (/^.{4,12}$/).test(passwordFlag);
    flagObject.number = (/[0-9]/).test(passwordFlag);
    (newPasswordFlag === passwordFlag) ? setFlagObject({...flagObject, samePass: true}) : setFlagObject({...flagObject, samePass: false});
  };

  const ControlAllTrue = () => {
    const booleanArray = [];

    for(const key in flagObject){
      booleanArray.push(flagObject[key])
    }
    let controlAllTrue = booleanArray.every((item) => item === true);
    setAllTrue(controlAllTrue)
  };

  useEffect(() => { CheckCondition(); }, [newPasswordFlag, passwordFlag]);
  useEffect(() => { ControlAllTrue(); }, [flagObject]);
  console.log('allTrue', allTrue)

  
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
        
        <InputRegister campoTexto="Contraseña" tipoDeInput={<TextInput style={{ ...styles.input, borderColor: allTrue ? 'green' : 'red' }} onChangeText={(text) => {setPasswordFlag(text), CheckCondition()}}/>}/>

        <InputRegister campoTexto="Repetir Contraseña" tipoDeInput={<TextInput style={{ ...styles.input, borderColor: allTrue ? 'green' : 'red' }} onChangeText={ (text) =>{setNewPasswordFlag(text)}} />}/>
        
        <View style={ styles.containerInputs }>
          <TextValidationPassword Texto="Letra mayúscula" icono={flagObject.uppercase} />
          <TextValidationPassword Texto="Letra mínuscula" icono={flagObject.lowercase}/>
          <TextValidationPassword Texto="Simbolo" icono={flagObject.caracter}/>
          <TextValidationPassword Texto="Número" icono={flagObject.length}/>
          <TextValidationPassword Texto="Ocho carácteres" icono={flagObject.number}/>
          <TextValidationPassword Texto="Coinciden" icono={flagObject.samePass}/>
        </View>

      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    position: 'relative',
    color: 'black'
  },
  containerInputs: {
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row'
  }
})