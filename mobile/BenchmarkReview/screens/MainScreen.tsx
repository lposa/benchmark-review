import {StyleSheet, Text, Pressable, View, Dimensions} from 'react-native';
import List from '../components/List';
import {Styles} from '../constants/styles';
import {
  test_data_games,
  test_data_shows,
  test_data_movies,
} from '../constants/data';
import * as React from 'react';
import {useState} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  listName: string;
  style?: any;
  data: {
    id: number;
    title: string;
    img: string;
    reviewer: string;
    score: number;
  };
  isEmpty: number;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainScreen: React.FC<IProps> = () => {
  const [showList, setShowList] = useState<string>('Games');

  let listContent;

  if (showList === 'Games') {
    listContent = (
      <List
        listName={'Latest Games'}
        style={styles.header}
        data={test_data_games}
        isEmpty={test_data_games.length}
      />
    );
  } else if (showList === 'Shows') {
    listContent = (
      <List
        listName={'Latest TV Shows'}
        style={styles.header}
        data={test_data_shows}
        isEmpty={test_data_shows.length}
      />
    );
  } else if (showList === 'Movies') {
    listContent = (
      <List
        listName={'Latest Movies'}
        style={styles.header}
        data={test_data_movies}
        isEmpty={test_data_movies.length}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.navigationContainer}>
        <View style={styles.svgContainer}>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
            <Path
              fill={Styles.colors.darkBlue}
              fill-opacity="1"
              d="M0,288L120,245.3C240,203,480,117,720,96C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            />
          </Svg>
        </View>
        <Pressable
          onPress={() => setShowList('Games')}
          style={({pressed}) => [
            pressed && styles.pressed,
            showList === 'Games'
              ? styles.activeNavigationBtn
              : styles.navigationBtn,
          ]}>
          <Text
            style={
              showList === 'Games'
                ? styles.navigationTextActive
                : styles.navigationTextInactive
            }>
            Games
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShowList('Shows')}
          style={({pressed}) => [
            pressed && styles.pressed,
            showList === 'Shows'
              ? styles.activeNavigationBtn
              : styles.navigationBtn,
          ]}>
          <Text
            style={
              showList === 'Shows'
                ? styles.navigationTextActive
                : styles.navigationTextInactive
            }>
            TV Shows
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShowList('Movies')}
          style={({pressed}) => [
            pressed && styles.pressed,
            showList === 'Movies'
              ? styles.activeNavigationBtn
              : styles.navigationBtn,
          ]}>
          <Text
            style={
              showList === 'Movies'
                ? styles.navigationTextActive
                : styles.navigationTextInactive
            }>
            Movies
          </Text>
        </Pressable>
      </View>

      {listContent}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 60,
    paddingBottom: 10,
  },
  header: {
    fontSize: 24,
    marginHorizontal: 15,
    marginVertical: 14,
    fontWeight: 'bold',
    color: Styles.colors.white,
    fontFamily: 'Jost-700-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: Styles.colors.darkBlue,
    width: 200,
    alignSelf: 'flex-end',
  },
  sliderContainer: {
    marginTop: 30,
  },
  navigationContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 10,
  },
  navigationBtn: {
    padding: 10,
    borderRadius: 20,
    elevation: 15,
    backgroundColor: Styles.colors.white,
  },
  activeNavigationBtn: {
    padding: 10,
    borderRadius: 20,
    elevation: 15,
    backgroundColor: Styles.colors.mainBlue,
  },

  navigationTextInactive: {
    color: '#8e8e8f',
    fontWeight: 'bold',
    fontSize: 18,
  },
  navigationTextActive: {
    color: Styles.colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
  svgContainer: {
    position: 'absolute',
    height: windowHeight,
    width: windowWidth,
    left: 0,
  },
  svgContainerBottom: {
    position: 'absolute',
    height: windowHeight,
    width: windowWidth,
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export default MainScreen;
