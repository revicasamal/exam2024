import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import countries from '../countries';

export default function CountriesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {countries.map((country, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Country', { country })}>
          <Image style={styles.flag} source={{ uri: country.flag }} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  flag: {
    width: 100,
    height: 60,
    margin: 10,
  },
});