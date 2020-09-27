import React from 'react';
import {FlatList} from 'react-native';
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
    isLiked: false,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane1',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    isLiked: false,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane2',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    isLiked: false,
    postedAt: '6 mins ago',
  },
  {
    user: {
      imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      name: 'Airplane3',
    },
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    caption: 'Beautiful Plane #plane',
    likes: 7897,
    isLiked: false,
    postedAt: '6 mins ago',
  },
];

const Feed = () => {
  const handleLike = (name) => {
    console.log(name)
    return data.map((d) => (d.user.name === name ? {...d, likes: d.likes + 1, isLiked: !d.isLiked } : d));
  }

  console.log(data)

  return (
    <FlatList
      ListHeaderComponent={Stories}
      data={data}
      keyExtractor={({user}) => user.name}
      renderItem={({item}) => <Post post={item} handleLike={handleLike} />}
    />
  );
};

export default Feed;
