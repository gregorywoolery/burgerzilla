import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import homephoto from "../../../assets/homephoto.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles.HomeScreen";
import Product from "../../components/Product/Product.component";
import Carousel from "react-native-snap-carousel";

export default function HomeScreen({ navigation }) {
  let _carousel: any;

  const testdata = [
    {
      name: "1 Cheese Burger",
      price: "$599",
    },
    {
      name: "2 Cheese Burger",
      price: "$599",
    },
    {
      name: "3 Cheese Burger",
      price: "$599",
    },
    {
      name: "4 Cheese Burger",
      price: "$599",
    },
    {
      name: "5 Cheese Burger",
      price: "$599",
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 130,
        }}
      >
        <Image
          source={require("../../../assets/burger1.jpg")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            margin: 5,
          }}
        >
          Cheese Burger
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text>$599</Text>
          <Ionicons name="heart-outline" size={20} color="red" />
        </View>
      </View>
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
              {/* <Carousel
                loop={true}
                loopClonesPerSide={2}
                layout="stack"
                ref={(c) => {
                  _carousel = c;
                }}
                data={testdata}
                renderItem={_renderItem}
                sliderWidth={340}
                itemWidth={280}
                onSnapToItem={(index) => {}}
              /> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
