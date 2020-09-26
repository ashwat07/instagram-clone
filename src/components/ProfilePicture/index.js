import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

function ProfilePicture({imageUri: uri, size = 70}) {
  return (
    <View style={[styles.container, {height: size + 6, width: size + 6}]}>
      <Image
        style={[styles.image, {height: size, width: size}]}
        source={{uri}}
      />
    </View>
  );
}

export default ProfilePicture;
