import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen, 
  SplashScreen, 
  LoginScreen,
  RegisterScreen,
  RegisterSuccessScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="RegisterSuccessScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
       <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}} />
       <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
