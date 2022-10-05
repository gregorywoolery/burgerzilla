import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Splash: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};


// Splash Screen
type SlashScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

type SplashScreenRouteProp = RouteProp<RootStackParamList, 'Splash'>;

export type SplashProps = {
  route?:  SplashScreenRouteProp,
  navigation: SlashScreenNavigationProps
}

