import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Main from '../components/Main';

export default class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo',
  };

  render() {
    return (
      <Main/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    marginBottom: 100,
  },
  contentContainer: {
    paddingTop: 30,
  },
  heading: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  headerText: {
    fontSize: 35,
  },
});
