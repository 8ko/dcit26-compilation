import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { global } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={global.container}>
      {isLoading ? <ActivityIndicator size="large" color="#ea1a3c" /> : (
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={global.userimg} source={{ uri: data.picture.large }} />
          </TouchableOpacity>
          <Text style={global.userNick}>{data.name.first}, {data.dob.age-10}</Text>
          <Text style={global.location}>{data.location.city}, {data.location.country}</Text>
        </View>
      )}
      <View style={global.reactn}>
        {isLoading ? true : (
          <View style={global.randomBtn}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Success',
                  'You have sent this user a heart!');
              }}
              style={global.button}>
              <Ionicons name="heart-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
        {isLoading ? true : (
          <View style={global.randomBtn}>
            <TouchableOpacity
              onPress={() => { fetchRandomData(); }}
              style={global.button}>
              <MaterialIcons name="autorenew" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>

  );
};

export default Home;