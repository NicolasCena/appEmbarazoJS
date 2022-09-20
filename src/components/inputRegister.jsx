import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const InputRegister = ({ campoTexto, tipoDeInput }) => {
  return (
    <View style={{ marginVertical: 10 }}>
        <Text>{campoTexto}</Text>
        { tipoDeInput }
    </View>
  )
}

