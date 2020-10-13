import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import data from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';
import {TextInput} from 'react-native-gesture-handler';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const route = useRoute();
  const navigate = useNavigation();
  const id = route.params.id;

  useEffect(() => {
    const userStories = data.find((story) => story.user.id === id);
    setUserStories(userStories);
    setActiveStoryIdx(0);
  }, [id, data]);

  useEffect(() => {
    if (!userStories) return;
    if (activeStoryIdx < 0) return;
    if (userStories && userStories.stories.length > activeStoryIdx - 1) {
      setActiveStory(userStories.stories[activeStoryIdx]);
    }
  }, [activeStoryIdx, userStories]);

  const navigateToNextUser = () => {
    navigate.push('Story', {id: id + 1});
  };

  const navigateToPrevUser = () => {
    navigate.push('Story', {id: id - 1});
  };

  const handleNextStory = () => {
    if (activeStoryIdx >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIdx((idx) => idx + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIdx <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIdx((idx) => idx - 1);
  };

  const handleStoryPress = (e) => {
    console.log(e.nativeEvent.locationX);
    const x = e.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x > screenWidth / 2) {
      handleNextStory();
    } else {
      handlePrevStory();
    }
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  // console.log(userStories.user)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleStoryPress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture imageUri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
          </View>
          <View style={styles.bottomStory}>
            <View style={styles.camerBtn}>
              <Feather name="camera" color={'#fff'} size={35} />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable={true}
                maxLength={40}
                placeholder="Send Message"
                placeholderTextColor={'white'}
              />
            </View>
            <View>
              <Ionicons name="paper-plane-outline" size={35} color={'#fff'} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
