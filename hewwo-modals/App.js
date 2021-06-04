// BSCS 3-4
// Legaspi, Vincent
// Singson, Grace Pauline O.
// Villareal, Ralph Samuel D.


import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';
import SampleModal from './components/SampleModal';
import UwU from './components/UwU';


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUwUOpen, setIsUwUOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.aaacontainer}>
        <Image source={{uri: 'https://i.imgur.com/jOasuCt.gif'}} style={styles.aaachan} onPress={() => setIsModalOpen(true)}/>
      </View>

      <View style={styles.buttons}>
        <Button title="Click me" color="#FF6961" onPress={() => setIsModalOpen(true)}/>
        <Button title="uwu uwu" color="#FF6961" onPress={() => setIsUwUOpen(true)}/>
      </View>

      <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <UwU visible={isUwUOpen} onClose={() => setIsUwUOpen(false)} />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#F5F5DD',
    justifyContent: 'center'
  },
  buttons: {
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  aaacontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },  
  aaachan: {
    width: 200,
    height: 200,
  }
});
