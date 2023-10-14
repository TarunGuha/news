import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../MainMenu';
import NewsMenu from '../NewsMenu';
import LiveMenu from '../LiveMenu';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="News Menu" component={NewsMenu} />
        <Stack.Screen name="Live Menu" component={LiveMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;