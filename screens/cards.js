import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class Cards extends Component {
  render() {
    return (
      <View
        style={{
          alignSelf: 'center',
          borderWidth: 2,
          borderRadius: 6,
          padding: 10,
          marginTop: 10,
          flex: 1,
          backgroundColor: '#A20021',
          borderColor: '#F79D5C',
        }}>
        <Text style={{ color: '#F79D5C', textAlign: 'center', fontSize: 15 }}>
          Nome: {this.props.person.nome}
        </Text>
        <Text style={{ color: '#F79D5C', textAlign: 'center', fontSize: 15 }}>
          Localização: {this.props.person.localização}
        </Text>
        <Text style={{ color: '#F79D5C', textAlign: 'center', fontSize: 15 }}>
          Contato: {this.props.person.contato}
        </Text>
        <Text style={{ color: '#F79D5C', textAlign: 'center', fontSize: 15 }}>
          Serviço: {this.props.person.serviço}
        </Text>
        <Text style={{ color: '#F79D5C', textAlign: 'center', fontSize: 15 }}>
          Valor: {this.props.person.valor}
        </Text>
      </View>
    );
  }
}
