import { View, Text } from 'react-native'
import React from 'react'
import RandomColorGenerator from './screens/RandomColorGenerator'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Color" component={RandomColorGenerator}
          options={{
            title: 'Generator',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App