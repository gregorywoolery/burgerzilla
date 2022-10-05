import React from 'react'
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import splashphoto from '../../../assets/splash-screen.jpg';
import styles from './styles.SplashScreen';
import Ionicons from '@expo/vector-icons/Ionicons';;
import { SplashProps } from '../../../navigaition/ScreenTypes/ParamList';

export default function SplashScreen({ navigation }: SplashProps) {
  return (
      <ImageBackground source={splashphoto} resizeMode="cover" style={{
        flex: 1
      }}>
        <SafeAreaView>
          <View style={styles.main_container}>
            <View style={styles.header_container}>
              <TouchableOpacity>
                <Ionicons name='search-outline' size={30}/>
              </TouchableOpacity>
            </View>

            <View style={styles.content_container}>
              <View style={styles.main_text_container}>
                <Text style={styles.splash_text}>"Good Food makes for a Good Mood"</Text>
              </View>
            
              <View>
                <TouchableOpacity 
                  style={styles.splash_button}
                  onPress={() => navigation.navigate('HOME_SCREEN')}>
                  <Text style={styles.button_text}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
  )
}
