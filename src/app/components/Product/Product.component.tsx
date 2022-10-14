import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Product({ item }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          source={require('../../../assets/burger1.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            margin: 5,
          }}
        >
          { item.name }
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Text>{ item.price }</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
