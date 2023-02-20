import {StyleSheet, Text, View} from 'react-native';
import Slider from '../components/Slider';

export default function MainScreen(): JSX.Element {
  return (
    <View>
      <Text style={styles.header}>Review Buddy</Text>
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    textAlign: 'center',
  },
});
