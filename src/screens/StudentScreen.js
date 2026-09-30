import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { student } from '../data/student';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.name}>{student.nombre}</Text>
      <Text style={styles.info}>Carnet: {student.carnet}</Text>
      <Text style={styles.info}>Sección: {student.seccion}  |  Grupo: {student.grupo}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
        <Text style={styles.buttonText}>Ver personajes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4eefa', padding: 24 },
  logo: { width: 140, height: 140, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#3b1a5a', marginBottom: 8 },
  info: { fontSize: 16, color: '#444', marginBottom: 4 },
  button: { marginTop: 28, backgroundColor: '#5b2a86', paddingHorizontal: 30, paddingVertical: 14, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
