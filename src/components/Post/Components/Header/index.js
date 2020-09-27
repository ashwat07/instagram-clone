import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ProfilePicture imageUri={imageUri} name={name} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon name="dots-three-vertical" size={20} style={styles.icon} />
    </View>
  );
};

export default Header;
