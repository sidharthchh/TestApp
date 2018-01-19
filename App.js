  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */

  import React, { Component } from 'react';
  import Header from './src/components/HeaderComponent/HeaderComponent';
  import VoiceContainer from './src/containers/VoiceContainer/VoiceContainer';
  import { Container } from 'native-base';
  import DashBoardContainer from './src/containers/DashboardContainer/DashboardContainer';

  import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  export default class App extends Component<{}> {

    constructor(props) {
      super(props);
      this.state = {
        activeView: 'DashBoardContainer',
        selectedMeeting: null
      }
      this.views = {
        DashBoardContainer: <DashBoardContainer selectMeeting={this.selectMeeting}/>,
        VoiceContainer: <VoiceContainer selectedMeeting={this.state.selectedMeeting}/>
      }
    }

    selectMeeting = (selectedMeeting) => {
      this.setState({
        selectedMeeting,
        activeView: 'VoiceContainer'
      });
    }

    render() {
      return (
        <Container>
          <Header />
          {
            this.views[this.state.activeView]
          }
        </Container>
      );
    }
  }
