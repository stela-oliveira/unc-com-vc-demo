import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.0.3:3000'; // ip locall

export default function HomeScreen() {
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarMensagem = async () => {
      try {
        const resposta = await axios.get(API_URL);
        setMensagem(resposta.data.message); // atualiza o estado com o backend
      } catch (error) {
        console.log('Erro ao buscar dados:', error.message);
        setMensagem('Erro ao conectar com o servidor');
      } finally {
        setCarregando(false);
      }
    };

    buscarMensagem();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.text}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00095aff',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});