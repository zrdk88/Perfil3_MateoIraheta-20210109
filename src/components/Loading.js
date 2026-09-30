import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#5b2a86" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 10, color: '#5b2a86' },
});
