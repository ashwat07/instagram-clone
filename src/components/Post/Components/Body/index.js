import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri: uri}) => {
  return <Image source={{uri}} style={styles.image}/>;
};

export default Body;
