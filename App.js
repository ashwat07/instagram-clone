/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes';




const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Route />
    </NavigationContainer>
  );
};

export default App;
