import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Styles} from '../constants/styles';
import SvgIcon from './UI/SvgIcon';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';

export interface Data {
  title: string;
  img?: ImageSourcePropType | string;
  reviewer: string;
  score: number;
}

const ListItem: React.FC<Data> = ({title, img, reviewer, score}) => {
  const navigation = useNavigation();
  const itemPressHandler = () => {
    navigation.navigate('GamePage', {
      gameTitle: title,
      img: img,
      reviewer: reviewer,
      score: score,
    });
  };

  return (
    <Pressable style={styles.listItem} onPress={itemPressHandler}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={img} />
        </View>
        <View style={styles.descContainer}>
          <View style={styles.itemDesc}>
            <Text
              numberOfLines={2}
              textBreakStrategy={'highQuality'}
              style={[styles.globalText, styles.bold, styles.blueText]}>
              {title}
            </Text>
            <Text style={styles.globalText}>{reviewer}</Text>
            <View style={styles.reviewBubble}>
              <Text style={[styles.globalText, styles.whiteText, styles.bold]}>
                {score}
              </Text>
            </View>
            <View style={styles.platformsContainer}>
              <SvgIcon
                width="50px"
                height="50px"
                viewBox="0 0 50 50"
                d={Styles.svgIconPaths.ps5}
              />
              <SvgIcon
                width="25px"
                height="25px"
                viewBox="0 0 50 50"
                d={Styles.svgIconPaths.xbox}
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 20,
    width: 400,
    height: 250,
  },
  image: {
    borderRadius: 20,
    width: 175,
    height: 200,
  },

  globalText: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  bold: {
    fontWeight: 'bold',
  },
  whiteText: {
    color: Styles.colors.white,
  },
  blueText: {
    color: Styles.colors.darkBlue,
  },
  reviewBubble: {
    position: 'absolute',
    backgroundColor: Styles.colors.darkBlue,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: Styles.colors.darkBlue,
    bottom: 10,
    right: 10,
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  itemDesc: {
    position: 'relative',
    width: 200,
    height: '100%',
    alignSelf: 'flex-end',
    padding: 10,
  },
  imgContainer: {
    position: 'absolute',
    zIndex: 999,
    elevation: 50,
  },
  descContainer: {
    position: 'absolute',
    backgroundColor: Styles.colors.white,
    width: 300,
    height: 200,
    borderRadius: 20,
    zIndex: -1,
    right: 10,
    bottom: -10,
    elevation: 15,
  },
  platformsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});

export default ListItem;
