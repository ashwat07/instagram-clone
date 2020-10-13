import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import OctIcons from 'react-native-vector-icons/Octicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Reels from '../screens/Reels';
import Add from '../screens/Add';
import Notification from '../screens/Notification/Notification';
import Profile from '../screens/Profile';
import ProfilePicture from '../components/ProfilePicture';
import Home from './home';


const Tab = createBottomTabNavigator();


const BottomStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === 'Reels') {
            return <Foundation name="play-video" size={size} color={color} />;
          }

          if (route.name === 'Add') {
            return <OctIcons name="diff-added" size={size} color={color} />;
          }

          if (route.name === 'Notification') {
            return <AntIcons name="hearto" size={size} color={color} />;
          }

          if (route.name === 'Profile') {
            return (
              <ProfilePicture
                imageUri={
                  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
                }
                size={20}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;
