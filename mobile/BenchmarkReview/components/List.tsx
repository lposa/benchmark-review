import React from 'react';
import {FlatList, Text} from 'react-native';
import {test_data_games} from '../constants/data';
import ListItem from './ListItem';

const renderItem = (data: any) => {
  return <ListItem {...data.item} />;
};

interface IProps {
  listName: string;
  style?: any;
}

const List: React.FC<IProps> = ({listName, style}) => {
  return (
    <>
      <Text style={style}>{listName}</Text>
      <FlatList
        data={test_data_games}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default List;
