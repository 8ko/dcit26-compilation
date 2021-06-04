import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Paragraph } from 'react-native-paper';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import BelleTable from '../components/Wikitable';


const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image source={require("../assets/belleheader.png")} style={styles.header} />
        </View>
        <View style={styles.translate}>
          <MaterialIcons name="translate" size={18} color="#333" onPress={() => Linking.openURL('https://en.m.wikipedia.org/wiki/Special:MobileLanguages/Belle_Delphine')} style={{ marginLeft: 10 }} />

          <Feather name="download" size={18} color="#333" onPress={() => Linking.openURL('https://www.youtube.com/watch?v=TL470fJMi7w')} />
          <Feather name="star" color="#333" onPress={() => Linking.openURL('https://en.m.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Belle+Delphine')} size={18} />
          <Feather name="edit" size={18} color="#333" onPress={() => Linking.openURL('https://en.m.wikipedia.org/w/index.php?title=Belle_Delphine&action=edit&section=0')} />
        </View>
        <Paragraph style={styles.paragraph}>
          Mary-Belle Kirschner (born 23 October 1999), better known as Belle Delphine, is a South African-born English <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Internet_celebrity')}>Internet celebrity</Text>, <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Pornography')}>pornographic </Text>actress, model, and <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/YouTuber')}>Youtuber</Text>. Her <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Instagram')}>Instagram</Text> account features <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Erotic_photography')}>erotic</Text> and <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Cosplay')}>cosplay</Text> modelling, sometimes blending the two together. Her posts on the platform were often influenced by popular <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Internet_meme')}>memes</Text> and trends. Media outlets have described her as an "<Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/E-girls_and_e-boys')}>e-girl</Text>" and a cross between an <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Internet_troll')}>Internet troll</Text> and a <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Performance_art')}>performance artist</Text>. Delphine has also been cited as an influence on the e-girl style commonly adopted by <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/TikTok')}>TikTok</Text> users.
      </Paragraph>
        <BelleTable />
        <Paragraph style={styles.paragraph}>
          Delphine's online persona began in 2018, through her cosplay modeling on Instagram. In mid–2019, she gained notoriety through creating a satirical <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.m.wikipedia.org/wiki/Pornhub')}>Pornhub</Text> account and selling her "GamerGirl Bath Water" product through her online store. Shortly after, her Instagram account was deleted due to community guideline violations. After a hiatus from October 2019 through June 2020, she started an OnlyFans account, on which she posts adult content. She also began uploading music videos on her YouTube channel, which often functioned as promotions for her <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.m.wikipedia.org/wiki/OnlyFans')}>OnlyFans</Text> account.
        </Paragraph>
        <View style={styles.final}>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> Early Life</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> Online career</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> Media reception and public image</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> Personal Life</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> Notes</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> References</Text>
          <Text style={styles.expandme}><FontAwesome name="angle-down" size={22} color="#2b2b24" /> External Links</Text>
        </View>

        <Text style={styles.copyright}> © Wikipedia 2021. Belle Delphine. </Text>

      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <FontAwesome name="home" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: '#fdcffd',
  },
  top: {
    marginTop: 10,
    alignItems: "center",
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
    backgroundColor: '#fd63fe'
  },
  header: {
    width: 240,
    height: 57
  },
  translate: {
    borderColor: '#c7c7c7',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10
  },
  paragraph: {
    paddingVertical: 10
  },
  expandme: {
    fontSize: 20,
    borderBottomWidth: .75,
    borderColor: '#c7c7c7',
    paddingVertical: 10,
    color: '#2b2b24'
  },
  final: {
    marginBottom: 25
  },
  copyright: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left'
  }

});

export default About;
