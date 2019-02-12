import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Achievements from '../components/Achievements';

export default class AchievementsScreen extends React.Component {
  static navigationOptions = {
    title: 'Achievements',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Achievements></Achievements>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
});
