import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import homephoto from '../../../assets/homephoto.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles.HomeScreen';
import Carousel from 'react-native-reanimated-carousel';
import { HomeScreenProps } from '../../../navigaition/ScreenTypes/ParamList';
import Product from '../../components/Product/Product.component';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const data = [
    {
      name: '1 Cheese Burger',
      price: '$599',
    },
    {
      name: '2 Cheese Burger',
      price: '$555',
    },
    {
      name: '3 Cheese Burger',
      price: '$566',
    },
    {
      name: '4 Cheese Burger',
      price: '$577',
    },
    {
      name: '5 Cheese Burger',
      price: '$588',
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <Product item={item}/>
    );
  };

  return (
    <ImageBackground
      source={homephoto}
      resizeMode="cover"   
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View style={styles.main_container}>
          <View style={styles.header_container}>
            <TouchableOpacity>
              <Ionicons name="menu" size={30} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="cart" size={30} />
            </TouchableOpacity>
          </View>

          <View style={styles.content_container}>
            <View style={styles.content_text_container}>
              <Text style={styles.content_text_header}>Delicious Food</Text>
              <Text>Organic, Healthy, Delicious, Order now</Text>
            </View>

            <View style={styles.search_container}>
              <TextInput style={styles.input_content} placeholder="Search" />
              <TouchableOpacity style={styles.search_button}>
                <Ionicons name="search" size={25} />
              </TouchableOpacity>
            </View>

            <View style={styles.products_container}>
              <Carousel
                style={{ width: '110%',}}
                width={165}
                height={150}
                data={data}
                renderItem={renderItem}
              />
            </View>
            <View>
              <View style={{
                height: '40%',
                marginTop: 20,
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
                <View style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <TouchableOpacity>
                    <Text 
                      style={{
                        fontSize: 24
                      }}
                    >+</Text>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="0"
                  />
                  <TouchableOpacity>
                    <Text 
                      style={{
                        fontSize: 24
                      }}
                    >-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                  backgroundColor: '#FECA16',
                }}>
                  <Text
                    style={{
                      color: '#fff'
                    }}
                  >Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
