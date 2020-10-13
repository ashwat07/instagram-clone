import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({story}) => {

  const { user: { imageUri, name, id } } = story;

  const navigation = useNavigation();
  
  const handlePress = () => {
      navigation.navigate("Story", { id })
  }

  // console.log(imageUri)

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ProfilePicture imageUri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
