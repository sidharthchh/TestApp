/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Container, Body, Card, CardItem, Content, Button, Icon, List, ListItem} from 'native-base';
import getMeetings from '../../../apiService';
import {apiService} from '../../../apiService';

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

    setList = (list) => this.setState({list: list});

    getInsights = () => {
        // get the insights here and return
        list = [{"title": "This is a test"}]
        this.setList(list);
    }

    render() {
        return (
            <Content contentContaineStyle={styles.flex}>
                <Body style={{alignSelf: 'stretch'}}>
                <Card style={styles.successMessageCard}>
                    <CardItem>
                        <Body style={styles.successMessageContainer}>
                        <Image style={styles.iconStyle} source={require('../../img/checked.png')}/>
                        <Text style={styles.successText}> Successfully Recorded </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={styles.insightCard}>
                    <CardItem header>
                        <Text style={styles.insightHeader}>Insights</Text>
                    </CardItem>
                    <Body style={styles.insightContainer}>
                    <List style={{alignSelf: 'stretch'}} dataArray={this.state.list}
                          renderRow={(item) =>
                              <ListItem>
                                  <Text>
                                      {item.title}
                                  </Text>
                              </ListItem>
                          }/>
                    </Body>
                </Card>
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
        height: 450
    },
    successMessageCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successMessageContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    successText: {
        color: 'green',
        fontSize: 12
    },
    iconStyle: {
        alignSelf: 'center',
        marginTop: 40
    },
    insightCard: {
        flex: 1,
        justifyContent: 'center',
    },
    insightContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    insightHeader: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
