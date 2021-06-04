// BSCS 3-4
// Legaspi, Vincent
// Singson, Grace Pauline O.
// Villareal, Ralph Samuel D.

// pls enable adblock <3

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  Image,
  Linking
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [items, setItems] = useState([]);

  const itemInputHandler = (enteredItem) => {
    setEnteredItem(enteredItem);
  };

  const addItemHandler = () => {
    console.log(enteredItem);
    if (enteredItem == '' | enteredItem == ' '){
      console.log("Alert");
      alert('Field cannot be blank.');
    } else {
      setItems(currentItems => [...currentItems, enteredItem]);
      setEnteredItem('');
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.aaacontainer}>
        <a href="https://www.youtube.com/watch?v=2G5s-FkqH3Y" target="_blank">
          <Image source={{uri: 'https://i.imgur.com/jOasuCt.gif'}}style={styles.aaachan} />
        </a>
       </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Item"
          style={styles.userInput}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <Button title="ADD" color="#FF6961" onPress={addItemHandler} />
      </View>
      <ScrollView>
        { items.map((item) => (
          <View key={item} style={styles.listItem}>
            <Text style={styles.extra} key={item}>{item}</Text>
          </View>
        )) }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#F5F5DD',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInput: {
    borderColor: '#FF6961',
    borderWidth: 1,
    padding: 10,
    width: '75%',
    fontFamily: 'Roboto',
  },
  listItem: {
    padding: 10,
    marginTop: 5,
    textAlign:'justify',
    borderColor: '#FF6961',
    borderWidth: 1,
  },
  extra: {
    fontFamily: 'Roboto',
    color: '#555555'
  },
  aaacontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },
  aaachan: {
    width: 128,
    height: 128,
  }
});
