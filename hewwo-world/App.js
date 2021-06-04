// BSCS 3-4
// Legaspi, Vincent B.
// Singson, Grace Pauline O.
// Villareal, Ralph Samuel D.

import React from 'react';
import AssetExample from './components/AssetExample';
import { Button, View, StyleSheet, SafeAreaView, Text, Redirect, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Hello World</Text>
       <AssetExample />
      <Button color="#FF6961"
        title="Click Me"
        onPress={() =>
          Linking.openURL('https://www.youtube.com/watch?v=QtBDL8EiNZo')
        } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#555555',
  },

});
