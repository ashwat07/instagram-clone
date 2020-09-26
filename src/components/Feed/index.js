import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../Post/Components';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    postedAt: '6 mins ago',
  },
];

const Feed = () => (
  <FlatList
    ListHeaderComponent={Stories}
    data={data}
    keyExtractor={({user}) => user.name}
    renderItem={({item}) => <Post post={item}  />}
  />
);

export default Feed;
