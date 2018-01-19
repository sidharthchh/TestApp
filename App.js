  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */

  import React, { Component } from 'react';
  import Header from './src/components/HeaderComponent/HeaderComponent';
  import VoiceContainer from './src/containers/VoiceContainer/VoiceContainer';
  import { Container } from 'native-base';

  import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  export default class App extends Component<{}> {

    render() {
      return (
        <Container>
          <Header />
          <VoiceContainer />
        </Container>
      );
    }
  }
