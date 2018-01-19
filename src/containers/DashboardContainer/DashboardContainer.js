/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Body, Content, Button, Icon, List, ListItem } from 'native-base';
import getMeetings from '../../../apiService';
import { apiService } from '../../../apiService';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class DashboardContainer extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
          list: []
        };
      }
    
      componentWillMount() {
        this.getMeetings();
      }
    
      setList = (list) => this.setState({ list: list });
    
      getMeetings = () => {
        const response = apiService.getMeetings();
        const setList = this.setList;
        return response.then(
          successResponse => {
            let list = [];
            Object.values(successResponse.data).map(val => {
              list = list.concat(val);
            });
            setList(list);
          },
          () => {
            console.log("ERROR RESSS");
          }
        );
      }
    
      onMeetingSelect = (meetingUUID) => {
        console.log("MEETINGS111", meetingUUID);
        // const response = apiService.getMeetingDetails(meetingUUID);
        // return response.then(
        //   successResponse => {
        //     console.log(successResponse.data);
        //   },
        //   () => {
        //     console.log("ERROR RESSS");
        //   }
        // );
        this.props.selectMeeting(meetingUUID)
      }
  
  render() {
    return (
        <Content contentContaineStyle={styles.flex}>
            <Body style={{ alignSelf: 'stretch' }}>
            <List style={{ alignSelf: 'stretch' }} dataArray={this.state.list}
                renderRow={(item) =>
                <ListItem onPress={this.onMeetingSelect.bind(this, item.uuid)}>
                    <Text >
                    {item.title ? item.start_time : item}{'\n'}{item.title ? item.title : item}
                    </Text>
                </ListItem>
                } />
            </Body>
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
