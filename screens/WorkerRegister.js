import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import firebase from "firebase";


const data = [
  { label: 'Fortaleza', value: '1' },
  { label: 'Caucaia', value: '2' },
  { label: 'Sobral', value: '3' },
  { label: 'Viçosa', value: '4' },
  { label: 'Juazeiro do Norte', value: '5' },
  { label: 'Maracanaú', value: '6' },
  { label: 'Eusébio', value: '7' },
  { label: 'Aquiraz', value: '8' },
];

const data2 = [
  { label: 'Babá', value: '9' },
  { label: 'Cuidado com Pets', value: '10' },
  { label: 'Cozinha', value: '11' },
  { label: 'Faxina', value: '12' },
  { label: 'Louça', value: '13' },
  { label: 'Roupa', value: '14' },
];

const DropdownComponent1 = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState(null);
  const [service, setService] = useState(null);
  const [value, setValue] = useState(null);

  const saveDataToFirebase = () => {
    firebase.database().ref('users').push({
      name,
      contact,
      city,
      service,
      value
    });

    // Reset the form after saving data
    setName('');
    setContact('');
    setCity(null);
    setService(null);
    setValue(null);
  };

  const renderLabel = () => {
    if (city || service) {
      return (
        <Text style={[styles.label, (city || service) && { color: '#F52F57' }]}>
          {city || service}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, alignSelf: 'center', color: '#F79D5C' }}>
        Cadastre-se
      </Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Nome'}
        placeholderTextColor={'#F52F57'}
      />
      <TextInput
        value={contact}
        onChangeText={(text) => setContact(text)}
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Contato'}
        placeholderTextColor={'#F52F57'}
      />
      <TextInput
        value={city}
        onChangeText={(text) => setCity(text)}
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Cidade(Obs.: apenas municípios do Ceará)'}
        placeholderTextColor={'#F52F57'}
      />
      <TextInput
        value={service}
        onChangeText={(text) => setService(text)}
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Serviço'}
        placeholderTextColor={'#F52F57'}
      />
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Valor(em reais)'}
        placeholderTextColor={'#F52F57'}
      />
      <TouchableOpacity
        onPress={saveDataToFirebase}
        style={{
          alignSelf: 'center',
          marginTop: 20,
          borderWidth: 2,
          borderRadius: 6,
          borderColor: '#F79D5C',
        }}>
        <Text style={{ color: '#F52F57' }}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A20021',
    padding: 16,
    flex: 1,
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

export default DropdownComponent1;
