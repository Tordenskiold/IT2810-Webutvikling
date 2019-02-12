import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    AsyncStorage,
    Modal,
    TouchableHighlight,
} from 'react-native';

import { MapView, Location, Permissions } from 'expo';
import Todo from './Todo';

export default class MapModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  render() {

     return (
      <View style={styles.todo}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}
          >
          <View style={{marginTop: 22}}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} style={styles.header}>

                <Text style={styles.backButton}>Hide Map</Text>

              </TouchableHighlight>
              <View >
                <MapView
                  style={styles.map}
                  region={{ 
                    latitude: this.props.x, 
                    longitude: this.props.y, 
                    latitudeDelta: 0.1, 
                    longitudeDelta: 0.1 }}
                >

                  <MapView.Marker
                    coordinate={{latitude: this.props.x, longitude: this.props.y}}
                    title="My Location"
                  />
                </MapView>

              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(null)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
}
const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  map: {
    width: "100%",
    height: "100%"
  },

  header: {
    margin:25,
    marginTop: 40,
  },

  backButton: {
    color: 'blue',
  },
  
});
