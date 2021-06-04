import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Vidsvids from '../components/HomeVids';
import { FontAwesome } from '@expo/vector-icons';

const Home = ({ navigation }) => (
  <View style={styles.container}>
   
   <ScrollView showsVerticalScrollIndicator={false}>
   <Vidsvids />
   </ScrollView>
   

    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={styles.button}>
      <FontAwesome name="user" size={25} color="#FFF" />
    </TouchableOpacity>
  </View>

);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar: {
    padding: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#FF6961',
    borderBottomWidth: 1
  },
  midbar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    bottom: 10,
    right: 10,
    borderRadius: 60,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#FF6961'
  }
});

export default Home;