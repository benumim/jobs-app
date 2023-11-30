import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import firebase from 'firebase';

class YourComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await firebase.database().ref('users').once('value');
      const data = response.val();

      if (data) {
        const dataArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.setState({ userData: dataArray });
      }
    } catch (error) {
      console.error('Erro ao buscar dados do Firebase:', error);
    }
  }

  render() {
    const { userData } = this.state;
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
                <Text style={styles.itemText}>Valor: {item.value}</Text>
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
  }
}

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
