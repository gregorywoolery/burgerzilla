import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigaition/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
}
