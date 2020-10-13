import React from 'react';
import { FlatList} from 'react-native';
import Story from '../Story';
import data from '../../data/stories'

// const data = [
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     name: 'Airplane',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
//     name: 'Arctichare',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
//     name: 'Boat',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
//     name: 'Pool',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     name: 'Airplane1',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
//     name: 'Arctichare1',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
//     name: 'Boat1',
//   },
//   {
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
//     name: 'Pool1',
//   },
// ];

const Stories = () => {
  return (
    <FlatList
       data={data}
       showsHorizontalScrollIndicator={false}
       horizontal
       keyExtractor={(item) => item.user.name}
       renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
