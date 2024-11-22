import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CityScreen from './screens/CityScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Weather' }} />
        <Stack.Screen name="City" component={CityScreen} options={{ title: 'City Weather' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
