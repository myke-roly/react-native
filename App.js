import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Learning from './screens/learning';
import Form from './screens/forms';
import CustomModal from './screens/modal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Modal" component={CustomModal} />
        <Stack.Screen name="Learning" component={Learning} options={{ title: 'Learning React Netive' }} />
        <Stack.Screen name="Form" component={Form} options={{ title: 'Email Form' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
