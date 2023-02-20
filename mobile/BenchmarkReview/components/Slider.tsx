import {ScrollView, Image, StyleSheet, View, Text} from 'react-native';
import {Styles} from '../constants/styles';

import {Dimensions} from 'react-native';

const width = Dimensions.get('width').width;

const Slider = (): JSX.Element => {
  return (
    <View>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/GoW.jpeg')}
            />
          </View>
          <View style={styles.itemDescription}>
            <Text>Stars</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/GoW.jpeg')}
            />
          </View>
          <View style={styles.itemDescription}>
            <Text>Stars</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/GoW.jpeg')}
            />
          </View>
          <View style={styles.itemDescription}>
            <Text>Stars</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/GoW.jpeg')}
            />
          </View>
          <View style={styles.itemDescription}>
            <Text>Stars</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    backgroundColor: Styles.colors.mainBlue,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 175,
    height: 225,
    marginHorizontal: 10,
    marginVertical: 25,
    borderRadius: 20,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  itemDescription: {},
});

export default Slider;
