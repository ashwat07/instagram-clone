import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  iconContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  },
  icon: {
    marginRight: 5
  },
  likes: {
    fontWeight: 'bold',
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 2,
  },
});

export default styles;
