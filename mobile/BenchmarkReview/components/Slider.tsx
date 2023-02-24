import {ScrollView, Image, StyleSheet, View, Text} from 'react-native';

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const Slider = (): JSX.Element => {
  return (
    <ScrollView horizontal={true} style={styles.scrollContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/GoW.jpeg')} />
        </View>
        <View style={styles.itemDescription}>
          <Text>Review 10/10</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/jedi.png')} />
        </View>
        <View style={styles.itemDescription}>
          <Text>Review 10/10</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/er.jpg')} />
        </View>
        <View style={styles.itemDescription}>
          <Text>Review 0/10</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/GoW.jpeg')} />
        </View>
        <View style={styles.itemDescription}>
          <Text>Review 10/10</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: width,
  },
  itemContainer: {
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
