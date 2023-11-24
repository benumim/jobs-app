import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Cards from './cards';
let pessoas = require('./dados.json');
export default class List extends Component {
  renderItem = ({ item: person }) => {
    return <Cards person={person} navigation={this.props.navigation} />;
  };
  render() {
    return (
      <View style={{ backgroundColor: '#A20021', flex: 1 }}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={pessoas}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
