import React from 'react';
import {View, Text} from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({post: {user, imageUri, likes, caption, postedAt}}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri}/>
      <Footer likes={likes} caption={caption} postedAt={postedAt}/>
    </View>
  );
};

export default Post;
