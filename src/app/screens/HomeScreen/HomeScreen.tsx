import React from 'react';
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import homephoto from '../../../assets/homephoto.png';
import Ionicons from '@expo/vector-icons/Ionicons';;

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={homephoto} resizeMode="cover" style={{
        flex: 1
      }}>
        <SafeAreaView>
            <View style={{
                paddingLeft: 20,
                paddingRight: 20
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Ionicons name='menu' size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='cart' size={30}/>
                    </TouchableOpacity>

                </View>

                <View style={{
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text >
                            Delicious Food
                        </Text>
                        <Text >
                            Organic, Healthy, Delicious, Order now
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                        
                    }}>
                        <TextInput 
                            style={{
                                width: '60%',
                                height: 40,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                padding: 10
                            }}
                            placeholder='Search'
                        
                        />
                        <TouchableOpacity style={{
                            backgroundColor: '#fff',
                            padding: 5,
                            borderRadius: 5,
                            marginLeft: 20
                        }}>
                            <Ionicons name='search' size={25}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    </ImageBackground>
    )
}
