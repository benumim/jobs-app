import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import firebase from 'firebase';

const YourComponent = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Função para buscar dados do Firebase
    const fetchData = async () => {
      try {
        const response = await firebase.database().ref('users').once('value');
        const data = response.val();

        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setUserData(dataArray);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do Firebase:', error);
      }
    };

    // Chama a função de busca ao montar o componente
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, alignSelf: 'center', color: '#F79D5C' }}>
        Informações do Banco de Dados
      </Text>
      {userData.length > 0 ? (
        <FlatList
          data={userData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Nome: {item.name}</Text>
              <Text style={styles.itemText}>Contato: {item.contact}</Text>
              <Text style={styles.itemText}>Cidade: {item.city}</Text>
              <Text style={styles.itemText}>Serviço: {item.service}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={{ color: '#F52F57', marginTop: 10 }}>
          Nenhum dado encontrado.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A20021',
    padding: 16,
    flex: 1,
  },
  itemContainer: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#F79D5C',
    padding: 10,
    marginTop: 10,
  },
  itemText: {
    color: '#F52F57',
    fontSize: 16,
  },
});

export default YourComponent;
