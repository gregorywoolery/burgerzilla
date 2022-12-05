import React from 'react';
import {
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
import ProductSelection from '../../components/ProductSelection/ProductSelection';
import useHomeScreen from './useHomeScreen';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const {
    orderAmount,
    setOrderAmount,
    predefinedMenu
  } = useHomeScreen(navigation);

  const renderItem = ({ item }) => {
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
                data={predefinedMenu}
                renderItem={renderItem}
              />
            </View>
            <ProductSelection 
              orderAmount={orderAmount}
              setOrderAmount={setOrderAmount}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
