import React from 'react'
import { Image, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Product() {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 130
    }}>
        <Image 
            source={require('../../../assets/burger1.jpg')} 
            style={{
                height: 100,
                width: 100,
                borderRadius: 50
            }}
        />
        <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            margin: 5
        }}>Cheese Burger</Text>
        <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%'
        }}>
            <Text>$599</Text>
            <Ionicons name='heart-outline' size={20} color='red'/>
        </View>
    </View>
  )
}
