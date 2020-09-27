import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Fontisto';
import PlaneIcon from 'react-native-vector-icons/Ionicons';
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Footer = ({likes, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likes);
  }, [likes]);

  const handlePress = () => {
    setIsLiked((liked) => !liked);
    setLikesCount((cnt) => (isLiked ? cnt - 1 : cnt + 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconSubContainer}>
          <TouchableWithoutFeedback onPress={handlePress}>
            {isLiked ? (
              <HeartIcon name="heart" size={23} color={'red'} />
            ) : (
              <HeartIcon name="hearto" size={23} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>

          <CommentIcon name="comment" size={23} color={'#545454'} />
          <PlaneIcon name="paper-plane-outline" size={23} color={'#545454'} />
        </View>
        <BookmarkIcon name="bookmark-o" size={23} color={'#545454'} />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
