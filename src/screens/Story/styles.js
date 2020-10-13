import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18
  },
  bottomStory: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 2,
    width: 340,
    height: 30,
    borderRadius: 50
  },
  cameraBtn: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageBtn: {
    width: 50
  },
});

export default styles;
