import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function App() {
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMensagem = async () => {
      try {
        // ⚠️ Altere o IP abaixo para o IP da sua máquina na rede local
        // Para descobrir, use: ipconfig (Windows) ou ifconfig (Linux/Mac)
        const response = await axios.get('http://192.168.0.7:3000/info');
        setMensagem(response.data.mensagem);
      } catch (error) {
        setMensagem('Erro ao conectar com o servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchMensagem();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#004a99" />
      ) : (
        <Text style={styles.text}>{mensagem}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f6ff',
  },
  text: {
    fontSize: 22,
    color: '#004a99',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});