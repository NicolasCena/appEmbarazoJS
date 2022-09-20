import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextValidationPassword = ({ Texto, icono}) => {
  return (
    <View style={ style.validateContainer }>
        <Icon name={icono} color='black' size={20} />
        <Text>{Texto}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    validateContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
})

