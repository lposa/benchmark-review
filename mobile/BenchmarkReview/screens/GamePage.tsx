import {
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Styles} from '../constants/styles';
import Svg, {Path} from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GamePage = ({route, navigation}) => {
  const gameTitle = route.params?.gameTitle;
  const img = route.params?.img;
  const reviewer = route.params?.reviewer;
  const score = route.params?.score;

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.navigation}>
        <Pressable onPress={goBackHandler} style={styles.backBtn}>
          <Icon name="caret-left" size={34} color={Styles.colors.white} />
        </Pressable>
      </View>
      <View style={styles.gameContainer}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.gameImage} />
        </View>
        <View style={styles.gameDescription}>
          <Text style={styles.gameTitle}>{gameTitle}</Text>
          <Text style={styles.gameReviewer}>{reviewer}</Text>
          <Text style={styles.gameScore}>{score}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 60,
    paddingBottom: 10,
  },
  gameImage: {
    width: windowWidth,
    height: 500,
  },
  imageContainer: {
    height: 500,
    overflow: 'hidden',
    marginHorizontal: 10,
    borderRadius: 10,
    resizeMode: 'contain',
    elevation: 15,
  },
  gameContainer: {
    flex: 3,
    marginVertical: 10,
  },
  gameTitle: {
    fontSize: 34,
    color: Styles.colors.darkBlue,
    fontWeight: 'bold',
  },
  gameReviewer: {
    fontSize: 24,
  },
  gameScore: {
    fontSize: 24,
  },
  gameDescription: {
    borderRadius: 10,
    elevation: 15,
    marginHorizontal: 10,
    backgroundColor: Styles.colors.white,
  },
  navigation: {
    position: 'relative',
    flexDirection: 'row',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 10,
    marginHorizontal: 10,
    elevation: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: Styles.colors.darkBlue,
  },
});

export default GamePage;
