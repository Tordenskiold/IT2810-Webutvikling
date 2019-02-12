import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { CheckBox, ListItem, Body } from 'native-base';

export default class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.text,
        checked: false
      }
    }


    checkBoxChecked = () => {
      this.props.completeMethod(this.props.text);
    };

    inspect = () => {
      this.props.inspectMethod(this.props.text);
    }

    render() {
      return (
        <View key={this.props.keyval} style={styles.todo}>
        <ListItem>
          <CheckBox style={styles.checkBox}
            center checked={this.state.checked}
            onPress={this.checkBoxChecked}
          />
          <Body>
            <Text style={styles.todoText} onPress={this.inspect}>{this.props.val.date}</Text>
            <Text style={styles.todoText} onPress={this.inspect}>{this.props.val.todo}</Text>
          </Body>
        </ListItem>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.todoDelete}>
          <Text style={styles.todoDeleteText}>Delete</Text>
        </TouchableOpacity>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  todo: {
    position: 'relative',
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: 'white'
  },
  todoText: {
    paddingLeft: 20,
  },
  todoDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    top: 10,
    bottom: 10,
    right: 10,
    zIndex: 11,
    borderRadius: 5,
    width: 50
  },
  checkBox: {
    borderColor: 'black',
  },
  todoDeleteText: {
    color: 'white'
  }
});
