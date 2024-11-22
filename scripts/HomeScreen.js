import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const API_KEY = 'your_api_key_here';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},TamilNadu,IN&appid=${API_KEY}&units=metric`
      );
      setWeatherData([response.data]);
      setCity('');
    } catch (error) {
      alert('City not found or API limit exceeded!');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={fetchWeather} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={weatherData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('City', { weather: item })}
            >
              <View style={styles.weatherCard}>
                <Text style={styles.cityName}>{item.name}</Text>
                <Text style={styles.temp}>{item.main.temp}°C</Text>
                <Text>{item.weather[0].description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 },
  weatherCard: { padding: 20, marginVertical: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  cityName: { fontSize: 20, fontWeight: 'bold' },
  temp: { fontSize: 18, color: '#888' },
});

export default HomeScreen;
