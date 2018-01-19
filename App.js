/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Header from './src/components/HeaderComponent/HeaderComponent';
import VoiceContainer from './src/containers/VoiceContainer/VoiceContainer';
import {Container} from 'native-base';
import DashBoardContainer from './src/containers/DashboardContainer/DashboardContainer';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import InsightContainer from "./src/containers/InsightContainer/InsightContainer";

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            activeView: 'InsightContainer',
            selectedMeeting: null
        }
        this.views = {
            DashBoardContainer: <DashBoardContainer selectMeeting={this.selectMeeting}/>,
            VoiceContainer: <VoiceContainer finishRecording={this.finishRecording} selectedMeeting={this.state.selectedMeeting}/>,
            InsightContainer: <InsightContainer  />
        }
    }

    selectMeeting = (selectedMeeting) => {
        this.setState({
            selectedMeeting,
            activeView: 'VoiceContainer'
        });
    }

    finishRecording = () => {
        this.setState({
           activeView: 'InsightContainer'
        });
    }

    goBack = () => {
      const backViews = {
        VoiceContainer: 'DashBoardContainer',
        DashBoardContainer: 'DashBoardContainer',
        InsightContainer: 'DashBoardContainer'
      }
      this.setState({
        activeView: backViews[this.state.activeView]
      });
    }

    render() {
      return (
        <Container>
          <Header goBack={this.goBack}/>
          {
            this.views[this.state.activeView]
          }
        </Container>
      );
    }
}
