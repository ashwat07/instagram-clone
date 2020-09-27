import React from 'react';
import {View} from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({
  post: {user, imageUri, likes, caption, postedAt, isLiked},
  handleLike,
}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer
        likes={likes}
        caption={caption}
        postedAt={postedAt}
        handleLike={handleLike}
        name={user.name}
        isLiked={isLiked}
      />
    </View>
  );
};

export default Post;
