import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from "firebase";

class DropdownComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      city: null,
      service: null,
    };

    // Vinculando métodos ao contexto da classe
    this.saveDataToFirebase = this.saveDataToFirebase.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  saveDataToFirebase() {
    const { name, contact, city, service } = this.state;
    firebase.database().ref('users').push({
      name,
      contact,
      city,
      service,
    });

    // Reset the form after saving data
    this.setState({
      name: '',
      contact: '',
      city: null,
      service: null,
    });
  }

  renderLabel() {
    const { city, service } = this.state;
    if (city || service) {
      return (
        <Text style={[styles.label, (city || service) && { color: '#F52F57' }]}>
          {city || service}
        </Text>
      );
    }
    return null;
  }

  render() {
    const { name, contact, city } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, alignSelf: 'center', color: '#F79D5C' }}>
          Cadastre-se
        </Text>
        <TextInput
          value={name}
          onChangeText={(text) => this.setState({ name: text })}
          style={styles.input}
          placeholder={'Nome'}
          placeholderTextColor={'#F52F57'}
        />
        <TextInput
          value={contact}
          onChangeText={(text) => this.setState({ contact: text })}
          style={styles.input}
          placeholder={'Contato'}
          placeholderTextColor={'#F52F57'}
        />
        <TextInput
          value={city}
          onChangeText={(text) => this.setState({ city: text })}
          style={styles.input}
          placeholder={'Cidade(Obs.: apenas municípios do Ceará)'}
          placeholderTextColor={'#F52F57'}
        />
        
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate("list")}
          style={styles.button}>
          <Text style={styles.buttonText}>Pronto</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A20021',
    padding: 16,
    flex: 1,
  },
  input: {
    borderWidth: 2,
    height: 30,
    borderRadius: 7,
    marginTop: 10,
    borderColor: '#F79D5C',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#F79D5C',
  },
  buttonText: {
    color: '#F52F57',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#F52F57',
  },
});

export default DropdownComponent2;

