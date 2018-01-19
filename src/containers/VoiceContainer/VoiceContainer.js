/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Voice from 'react-native-voice';
import { Container, Card, CardItem, Body, Content, Button, Icon } from 'native-base';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class VoiceContainer extends Component<{}> {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    console.log('registered events');
    // Voice.start('en-US');
    // console.log('isAvailable', Voice.isAvailable());
    this.state = {
      result: 'Start Recording'
    };
  }

  onSpeechStartHandler = (e) => {
    // console.log('onSpeechStartHandler', e);
  }

  onSpeechEndHandler = (e) => {
    // console.log('onSpeechEndHandler', e);
  }

  onSpeechResultsHandler = (e) => {
    // console.log('onSpeechResultHandler', e.);
    this.setState({result: e.value[0]});
  }

  componentDidMount() {
    Voice.isAvailable().then(success => {
      console.log('isAvailable success', success);
    }, reject => {
      console.log('isAvailable reject', reject);
    });
    // Voice.start();
  }

  startRecording = () => {
    Voice.start();
  }

  stopRecording = () => {
    Voice.stop();
  }

  
  render() {
    return (
        <Content contentContaineStyle={styles.flex}>
        <Card style={styles.contentCard}>
            <CardItem>
            <Body>
                <Text>
                {this.state.result}
                </Text>
            </Body>
            </CardItem>
        </Card>
        <Card style={styles.controlCard}>
            <CardItem>
            <Body style={styles.controlsContainer}>
            <Button onPress={this.startRecording}>
                <Icon name='ios-recording' />
            </Button>
            <Button light onPress={this.stopRecording}>
                <Icon name='ios-square' />
            </Button>
            </Body>
            </CardItem>
        </Card>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  flex: {
    flex: 1,
  },
  contentCard: {
    // alignSelf: 'flex-end'
    height: 450
  },
  controlCard: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  controlsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
