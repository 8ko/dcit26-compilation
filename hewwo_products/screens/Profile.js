import React from "react";
import { Text, Image, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import TweetsProfile from '../components/TweetsProfile';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardcontainer}>
          <Image style={styles.header} source={require('../assets/header.jpg')} />
          <Image style={styles.icon} source={require('../assets/icon.jpg')} />
          <Text style={styles.displayname}> Belle Delphine </Text>
          <Text style={styles.handle}>@bunnydelphine </Text>
          <Text style={styles.description}>Hello! I'm belle ^-^ I pretend to be a cat {'\n'}
        enquiries: belledelphine@gmail.com</Text>
          <View style={styles.dateloc}>
            <Text style={styles.location}><Ionicons name="location-outline" size={14} color="gray" />  England, United Kingdom</Text>
            <Text style={styles.datejoined}><FontAwesome name="calendar" size={14} color="gray" />  Joined June 2019</Text>
          </View>
          <Text style={styles.following}><Text style={{ fontWeight: 'bold', color: 'gray' }}>0</Text> Following   <Text style={{ fontWeight: 'bold', color: 'gray' }}>162K</Text> Followers {'\n'}</Text>
          <View style={styles.tweetnav}>
            <Text style={styles.tweetactive}>    Tweets    </Text>
            <Text style={styles.tweettext}>Tweets & replies</Text>
            <Text style={styles.tweettext}>Media</Text>
            <Text style={styles.tweettext}>Likes</Text>
          </View>
        </View>
        <View style={styles.twtcontainer}>
          <View>
            <TweetsProfile />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Ionicons name="home" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdcffd',
  },
  cardcontainer: {
    lineHeight: 0
  },
  twtcontainer: {
    paddingHorizontal: 0,
  },
  tweetactive: {
    color: '#fd63fe',
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderColor: '#fd63fe',
  },
  tweettext: {
    color: 'gray',
    marginBottom: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  tweetnav: {
    borderBottomWidth: .75,
    borderColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: '#fd63fe',
    paddingHorizontal: 5,
  },
  icon: {
    left: 5,
    top: 70,
    width: 100,
    height: 100,
    borderRadius: 60,
    position: 'absolute',
    borderColor: '#fdcffd',
    borderWidth: 2
  },
  header: {
    height: 120,
    width: (Dimensions.get('window').width),
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  displayname: {
    left: 5,
    marginTop: 50,
    color: '#fd63fe',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -2
  },
  handle: {
    left: 10,
    fontSize: 14,
    color: 'gray',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingRight: 20,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 5
  },
  dateloc: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  datejoined: {
    fontSize: 13,
    left: 20,
    color: 'gray',
  },
  location: {
    fontSize: 13,
    left: 10,
    color: 'gray',
    marginBottom: 5
  },
  following: {
    left: 10,
    fontSize: 13,
    color: 'gray',
    paddingHorizontal: 5,
    marginBottom: -5
  },
  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    bottom: 10,
    right: 10,
    borderRadius: 60,
    paddingVertical: 8,
    position: 'absolute',
    backgroundColor: '#fd63fe'
  }
});


export default Profile;
