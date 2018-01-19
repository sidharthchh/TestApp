import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={this.props.goBack}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>MeetNotes</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}