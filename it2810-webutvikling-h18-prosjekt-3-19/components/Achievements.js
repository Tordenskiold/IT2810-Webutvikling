import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';

export default class Achievements extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalcount: 0,
      todaycount: 0,
    };
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}>Daily Completed</Text>
        <Text style={styles.totaltext}>{this.state.todaycount} completed todos today</Text>

        <Text>{ this.state.debug }</Text>

        <View style={styles.badgeContainer}>
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 5
                ? require('../assets/images/achievements/5.png')
                : require('../assets/images/achievements/5_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 10
                ? require('../assets/images/achievements/10.png')
                : require('../assets/images/achievements/10_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 20
                ? require('../assets/images/achievements/20.png')
                : require('../assets/images/achievements/20_.png')
            }
          />
        </View>
        <View style={styles.badgeContainer}>
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 30
                ? require('../assets/images/achievements/30.png')
                : require('../assets/images/achievements/30_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 40
                ? require('../assets/images/achievements/40.png')
                : require('../assets/images/achievements/40_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.todaycount >= 50
                ? require('../assets/images/achievements/50.png')
                : require('../assets/images/achievements/50_.png')
            }
          />
        </View>


        <Text style={styles.header}>Total Completed</Text>
        <Text style={styles.totaltext}>{this.state.totalcount} completed in total</Text>

        <View style={styles.badgeContainer}>
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 100
                ? require('../assets/images/achievements/100.png')
                : require('../assets/images/achievements/100_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 250
                ? require('../assets/images/achievements/250.png')
                : require('../assets/images/achievements/250_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 500
                ? require('../assets/images/achievements/500.png')
                : require('../assets/images/achievements/500_.png')
            }
          />
        </View>
        <View style={styles.badgeContainer}>
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 1000
                ? require('../assets/images/achievements/1000.png')
                : require('../assets/images/achievements/1000_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 2000
                ? require('../assets/images/achievements/2000.png')
                : require('../assets/images/achievements/2000_.png')
            }
          />
          <Image
            style={styles.achievementBadge}
            source={
              this.state.totalcount >= 5000
                ? require('../assets/images/achievements/5000.png')
                : require('../assets/images/achievements/5000_.png')
            }
          />
        </View>
      </View>
    );
  }

  // When app starts get JSON from storage
  componentDidMount() {
    this.getJSON();

    this._interval = setInterval(() => {
      this.getJSON();
    }, 1000);
  }



  getJSON = async () => {
    try {
      const value = await AsyncStorage.getItem('@ToDoStore:JSON');
      if (value !== null) {
        // We have data!!
        this.setState({
          todaycount: JSON.parse(value)['todaycount'],
          totalcount: JSON.parse(value)['totalcount'],
        })
      }
    } catch (error) {
      throw error
    }
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    fontSize: 25,
  },
  totaltext: {
    fontSize: 10,
    marginTop:10,
    textAlign: 'right',
  },
  achievementBadge: {
    margin:20,
    width:50,
    height:50,
  },
  badgeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
