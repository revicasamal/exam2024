import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CountriesScreen from './screens/CountriesScreen';
import CountryScreen from './screens/CountryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CountriesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen name="Country" component={CountryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Countries" component={CountriesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}