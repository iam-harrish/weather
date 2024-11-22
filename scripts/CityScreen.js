import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CityScreen = ({ route }) => {
  const { weather } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.temp}>{weather.main.temp}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <Text>Humidity: {weather.main.humidity}%</Text>
      <Text>Wind Speed: {weather.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  cityName: { fontSize: 30, fontWeight: 'bold' },
  temp: { fontSize: 24, color: '#555' },
  description: { fontSize: 18, color: '#888', marginVertical: 10 },
});

export default CityScreen;
