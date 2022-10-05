import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

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

