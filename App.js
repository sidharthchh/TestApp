/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Voice from 'react-native-voice';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    console.log('registered events');
    // Voice.start('en-US');
    // console.log('isAvailable', Voice.isAvailable());
  }

  onSpeechStartHandler = (e) => {
    console.log('onSpeechStartHandler', e);
  }

  onSpeechEndHandler = (e) => {
    console.log('onSpeechEndHandler', e);
  }

  onSpeechResultsHandler = (e) => {
    console.log('onSpeechResultHandler', e);
  }

  componentDidMount() {
    Voice.isAvailable().then(success => {
      console.log('isAvailable success', success);
    }, reject => {
      console.log('isAvailable reject', reject);
    });
    // Voice.start();
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
