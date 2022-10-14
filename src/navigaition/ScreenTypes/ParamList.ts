import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SPLASH_SCREEN: undefined;
  HOME_SCREEN: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};


// Splash Screen
type SlashScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SPLASH_SCREEN',
  'HOME_SCREEN'
>;

type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SPLASH_SCREEN'>;

export type SplashProps = {
  route?:  SplashScreenRouteProp,
  navigation: SlashScreenNavigationProps
}

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SPLASH_SCREEN',
  'HOME_SCREEN'
>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HOME_SCREEN'>;

export type HomeScreenProps = {
  route?:  HomeScreenRouteProp,
  navigation: HomeScreenNavigationProps
}
