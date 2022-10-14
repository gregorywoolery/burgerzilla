import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles.counter';

function ButtonControl({ name, onPress}){
  return (
    <TouchableOpacity onPress={onPress}
      style={styles.button_container}>
      <Ionicons name={name} 
        style={styles.text}
      />
    </TouchableOpacity>
  );
}

export default function Counter({ currentValue, setValue }) {
  return (
    <View style={styles.container}>
      <ButtonControl 
        name='remove' 
        onPress={() => {
          let newValue = currentValue - 1;
          if(newValue < 0) newValue = 0;
          setValue(newValue);
        }}
      />
      <TextInput
        value={currentValue.toString()}
        style={styles.input_field}
      />
      <ButtonControl 
        name='add' 
        onPress={() => {
          let newValue = currentValue + 1;
          if(newValue > 10) newValue = 10;
          setValue(newValue);
        }}/>
    </View>
  );
}
