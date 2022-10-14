import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Counter from '../Counter/Counter';

export default function ProductSelection({
  orderAmount,
  setOrderAmount
}) {
  return (
    <View>
      <View style={{
        height: '40%',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold'
        }}>Cheese Burger</Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10
          }}
        >Buy now our organic healthy delicious salad and burger with home delivery available.</Text>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Counter currentValue={orderAmount} setValue={setOrderAmount}/>
        <TouchableOpacity style={{
          backgroundColor: '#FECA16',
          paddingVertical: 20,
          paddingHorizontal: 40,
          borderRadius: 10,
        }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18
            }}
          >Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
