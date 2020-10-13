import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStackNavigator from './bottomHomeNavigator';
import StoryScreen from '../screens/Story';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
