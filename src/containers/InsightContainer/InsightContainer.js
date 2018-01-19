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

export default class InsightContainer extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentWillMount() {
        this.getInsights();
    }

    setList = (list) => this.setState({ list: list });

    getInsights = () => {
        // get the insights here and return
        list = [{"title": "This is a test"}]
        this.setList(list);
    }

    render() {
        return (
            <Content contentContaineStyle={styles.flex}>
                <Body style={{ alignSelf: 'stretch' }}>
                <List style={{ alignSelf: 'stretch' }} dataArray={this.state.list}
                      renderRow={(item) =>
                          <ListItem>
                              <Text >
                                  {item.title}
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
