import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

import {Styles} from '../constants/styles';
import ListItem from './ListItem';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const renderItem = (data: any) => {
  return <ListItem {...data.item} />;
};

interface IProps {
  listName: string;
  style?: any;
  isEmpty: boolean;
  data: {
    id: number;
    title: string;
    img: string;
    reviewer: string;
    score: number;
  };
}

const List: React.FC<IProps> = ({listName, style, data, isEmpty}) => {
  return (
    <View style={styles.list}>
      <Text style={style}>{listName}</Text>
      {isEmpty != true ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          viewabilityConfig={{itemVisiblePercentThreshold: 90}}
          pagingEnabled={true}
          decelerationRate={'fast'}
        />
      ) : (
        <Text style={styles.errorText}>
          No {listName} available at this time!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 150,
    backgroundColor: 'transparent',
  },
  errorText: {
    marginBottom: 60,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default List;
