import {StyleSheet, Text, View, ScrollView} from 'react-native';
import List from '../components/List';

export default function MainScreen(): JSX.Element {
  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.header}>Review Buddy</Text>

      <List listName={'Lastes Games'} style={styles.subheader} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    paddingBottom: 10,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  sliderContainer: {
    marginTop: 30,
  },
});
