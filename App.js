import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DropdownComponent2 from './screens/HireRegister';
import DropdownComponent1 from './screens/WorkerRegister';
import Usage from './screens/Usage';
import List from './screens/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase';
import { firebaseConfig } from './config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{
          title: 'Bem-vindo',
          headerStyle: { backgroundColor: '#F52F57' },
          headerTitleStyle: { color: '#F79D5C' },
        }}
        name="usage"
        component={Usage}
      />
      <Stack.Screen
        options={{
          title: 'Cadastro',
          headerStyle: { backgroundColor: '#F52F57' },
          headerTitleStyle: { color: '#F79D5C' },
        }}
        name="registro trabalho"
        component={DropdownComponent1}
      />
      <Stack.Screen
        options={{
          title: 'Cadastro',
          headerStyle: { backgroundColor: '#F52F57' },
          headerTitleStyle: { color: '#F79D5C' },
        }}
        name="registro contrato"
        component={DropdownComponent2}
      />
           <Stack.Screen
        options={{
          title: 'Encontre alguém',
          headerStyle: { backgroundColor: '#F52F57' },
          headerTitleStyle: { color: '#F79D5C' },
        }}
        name="list"
        component={List}
      />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
