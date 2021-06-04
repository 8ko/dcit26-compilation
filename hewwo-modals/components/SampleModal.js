import React, { useState } from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Button,
  Image,
  Linking,
  ScrollView
} from 'react-native';

const SampleModal = props => {
  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.aaacontainer}>
          <Image source={{uri: 'https://media.tenor.com/images/974096177dc2774496881b14a8f8a26a/tenor.gif'}}style={styles.aaachan}  />
        </View>

        <ScrollView>
          <Text style={styles.text}>
          {'\n'}  What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals,and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.{'\n\n'} I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words.{'\n\n'} You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands.{'\n\n'} Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit.If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue.{'\n\n'} But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it.{'\n\n'} You’re fucking dead, kiddo.{'\n'}
        </Text>
        </ScrollView>

        <Button title="close" color="#FF6961" onPress={props.onClose}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#F5F5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aaacontainer: {
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'justify',
    letterSpacing: 1.5
  },
  aaachan: {
    width: 150,
    height: 150,
  }
});

export default SampleModal;