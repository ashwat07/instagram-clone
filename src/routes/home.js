import {createStackNavigator} from '@react-navigation/stack';
import Logo from './src/assets/images/Instagram-Logo.png';

import FeatherIcons from 'react-native-vector-icons/Feather';
import HomeScreen from './src/screens/HomeScreen';
import PlaneIcon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: 'Instagram',
          headerTitle: () => (
            <Image source={Logo} resizeMode="contain" style={{width: 120}} />
          ),
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            margin: 15,
          },
          headerRightContainerStyle: {
            margin: 15,
          },
          headerLeft: () => (
            <FeatherIcons name="camera" size={25} color={'#000'} />
          ),
          headerRight: () => (
            <PlaneIcon name="paper-plane-outline" size={25} color={'#000'} />
          ),
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default Home;