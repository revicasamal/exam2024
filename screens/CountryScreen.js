import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CountryScreen({ route }) {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{country.name}</Text>
      <Image style={styles.flag} source={{ uri: country.flag }} />
      <Text>Population: {country.population}</Text>
      <Text>{country.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flag: {
    width: 200,
    height: 120,
    marginVertical: 20,
  },
});