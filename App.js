import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoardScreen from './src/views/screens/OnBoardScreen'
import HomeScreen from './src/views/screens/HomeScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'
const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;