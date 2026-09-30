import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import useCharacters from '../hooks/useCharacters';
import Card from '../components/Card';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function CharactersScreen() {
  const { characters, loading, error, reload } = useCharacters();

  if (loading) return <Loading message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 14 }}
        renderItem={({ item }) => (
          <Card title={item.name} image={item.image} description={item.description} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f4eefa' } });
