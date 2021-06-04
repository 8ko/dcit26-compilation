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

const UwU = props => {
  return(
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.aaacontainer}>
          <Image source={{uri: 'https://media.tenor.com/images/5f5e3022904e6c7830dede0669e08bb6/tenor.gif'}}style={styles.aaachan}  />
            
        </View>

        <ScrollView>
          <View style={styles.buttons}>
            <Button title="uwu" color="#FF6961" onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=h6DNdop6pD8')}} />
            <Button title="kawaii" color="#FF6961" onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=dWNvlyycWzQ')}} />
          </View>
        
          <Text style={styles.text}>
          {'\n'}  Rawr X3 *nuzzles* How are you? *pounces on you* you're so warm o3o *notices you have a bulge* someone's happy! *nuzzles your necky wecky* ~murr~ hehe ;) *rubbies your bulgy wolgy* you're so big! *rubbies more on your bulgy wolgy* it doesn't stop growing .///.
          {'\n\n'}   *kisses you and licks your neck* daddy likes ;) *nuzzle wuzzle* I hope daddy likes *wiggles butt and squirms* I wanna see your big daddy meat! *wiggles butt* I have a little itch o3o *wags tails* can you please get my itch? *put paws on your chest* nyea~ it's a seven inch itch *rubs your chest* can you pwease? *squirms* pwetty pwease? :(
          {'\n\n'}   I need to be punished *runs paws down your chest and bites lip* like, I need to be punished really good *paws on your bulge as I lick my lips* I'm getting thirsty. I could go for some milk *unbuttons your pants as my eyes glow* you smell so musky ;) *licks shaft* mmmmmmmmmmmmmmmmmmm so musky ;)
          
          {'\n\n'}   *drools all over your cawk* your daddy meat. I like. Mister fuzzy balls. *puts snout on balls and inhales deeply* oh my gawd. I'm so hard *rubbies your bulgy wolgy* *licks balls* punish me daddy nyea~ *squirms more and wiggles butt* I love your inside musky job goodness *bites lip*
          
          {'\n\n'}   please punish me *licks lips* nyea~ *suckles on your tip* so good *licks pre off your cock* salty goodness~ *eyes roll back and goes balls deep*

          {'\n\n\n'}  Dicks awe so cute omg(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ when chu howd one in youw paw and it stawts twitching its wike its nyuzzwing chu(/ω＼){'\n\n'}  ow when dey pewk up and wook at chu wike" owo nya? :3c" hehe ~ penyis-kun is happy to see me!! （＾ワ＾） and teh most adowabwe thing evew is when spewm-sama comes out but theywe wwwy shy{'\n\n'}   so u have to wowk hawd!!(๑•̀ㅁ•́๑)✧ but when penyis-kun and spewm-sama meet and theywe bwushing and aww wike "uwaaa~!" (ﾉ´ヮ´)ﾉ: ･ﾟhehehe~penyis-kun is so adowabwe {'\n'}(●´д｀●)・::・{'\n'}
          </Text>
        </ScrollView>

        <Button title="close" color="#FF6961" onPress={props.onClose}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#F5F5DD',
    alignItems: 'center',
  },
  aaacontainer: {
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'justify',
    letterSpacing: 1
  },
  aaachan: {
    width: 150,
    height: 150,
  },
  buttons: {
    paddingHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});

export default UwU;