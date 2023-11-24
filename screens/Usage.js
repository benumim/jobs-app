import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Usage extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#A20021' }}>
        <Text style={{ fontSize: 25, alignSelf: 'center', color: '#F79D5C' }}>
          Como gostaria de usar o app?
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('registro trabalho')}
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderWidth: 2,
            borderRadius: 6,
            width: 200,
            padding: 10,
            borderColor: '#F79D5C',
          }}>
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#F52F57' }}>
            Para ser contratado
          </Text>
          <Ionicons
            name={'home'}
            size={20}
            style={{ alignSelf: 'center', color: '#F52F57' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('registro contrato')}
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderWidth: 2,
            borderRadius: 6,
            width: 200,
            padding: 10,
            borderColor: '#F79D5C',
          }}>
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#F52F57' }}>
            Para contratar
          </Text>
          <Ionicons
            name={'cash'}
            size={20}
            style={{ alignSelf: 'center', color: '#F52F57' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
