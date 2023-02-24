/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Styles} from '../constants/styles';

export interface Data {
  title: string;
  img?: ImageSourcePropType | string;
  reviewer: string;
  score: number;
}

const ListItem: React.FC<Data> = ({title, img, reviewer, score}) => {
  return (
    <Pressable style={styles.listItem}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={img} />
        </View>
        <View style={styles.itemDescription}>
          <Text style={styles.globalText}>{title}</Text>
          <Text style={styles.globalText}>By {reviewer}</Text>
          <Text style={styles.globalText}>Review {score}/10</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 225,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemDescription: {
    position: 'relative',

    width: '100%',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    bottom: 0,
  },
  globalText: {
    color: Styles.colors.darkBlue,
    fontSize: 18,
    textAlign: 'center',
  },
  listItem: {
    position: 'relative',
    borderRadius: 20,
    backgroundColor: Styles.colors.white,
    marginHorizontal: 10,
    elevation: 15,
    marginVertical: 20,
    shadowColor: Styles.colors.darkBlue,
  },
});

export default ListItem;
