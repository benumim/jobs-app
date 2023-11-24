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
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#F52F57' }]}></Text>
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
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#F52F57' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Cidade' : '...'}
        searchPlaceholder="Procurar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? '#F52F57' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#F52F57' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Serviço' : '...'}
        searchPlaceholder="Procurar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? '#F52F57' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      <TextInput
        style={{
          borderWidth: 2,
          height: 30,
          borderRadius: 7,
          marginTop: 10,
          borderColor: '#F79D5C',
        }}
        placeholder={'Valor'}
        placeholderTextColor={'#F52F57'}
      />
      <TouchableOpacity
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
  dropdown: {
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#F79D5C',
    paddingHorizontal: 8,
    marginTop: 10,
    color: '#F52F57',
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 16,
    color: '#F52F57',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#F52F57',
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#F52F57',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#F52F57',
  },
});

export default DropdownComponent1;
