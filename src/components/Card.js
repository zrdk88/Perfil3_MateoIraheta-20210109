import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', borderRadius: 14, marginBottom: 14, overflow: 'hidden',
    elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  image: { width: '100%', height: 220 },
  body: { padding: 12 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#3b1a5a', marginBottom: 4 },
  description: { fontSize: 14, color: '#555' },
});
