import React from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet, Image, Linking, Paragraph } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


const Vidsvids = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require("../assets/belleheader.png")} style={styles.header} />
                </View>
                <Text style={styles.desc}>・cosplayer・pornographic actress・model・{'\n'}・gamer girl bath water・</Text>

                <View style={styles.video}>
                    <YoutubePlayer
                        height={220}
                        width={(Dimensions.get('window').width)/1.05}
                        videoId={'TwMsjKWXjUs'}
                    />
                 </View>

                 <View style={styles.textcontainer}> 
                 <Text style={styles.copypasta}>    w-w-w-what.. are you a g-girl? m m'lady may i tell you blushes about the holocaust around the 1930's??? I mmeant... sorry, im get nervous  im a nice person and if anyon one ever hurts you,, i will. Will protect you withth my s-sword kun.. ur asian btw.., uwu so,.. you, like a-anime and mm-manga too? That is ss-so me! blushes a deep red.. you are my type ;) by-btw, you arent fat.. right? S-sorry, fat as-asian girls are n-not my type uwu, i-i am a reall-very nice person, b-but you will will make me, make me happy too? L-like, in the morning, wou-would you do, IT with me?? :333 i-im sorry, i-you remind me of the g-girl from naruto sarada!! I know my stutff ;), and and aqua too!!! T-these are my fav-favorite waifus i e-even own body pillows of, them!{'\n'}</Text><Text style={styles.copypasta} onPress={() => Linking.openURL('https://i.imgur.com/gdf9PzX.jpg')}>    Oh, i h-hope you don-t mind me, i lo-ok kinda like this but im really kawaii ;33 right?</Text>
                </View>
                
                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/EnnL3gMWMAAfGyC.jpg')} /></View>
                
                <View style={styles.textcontainer}>
                    <Text style={styles.copypasta}>    A girl.... AND a gamer? Whoa mama! Hummina hummina hummina bazooooooooing! *eyes pop out* AROOOOOOOOGA! *jaw drops tongue rolls out* WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF *tongue bursts out of the outh uncontrollably leaking face and everything in reach* WURBLWUBRLBWURblrwurblwurlbrwubrlwburlwbruwrlblwublr *tiny cupid shoots an arrow through heart* Ahhhhhhhhhhh me lady... *heart in the shape of a heart starts beating so hard you can see it through shirt* ba-bum ba-bum ba-bum ba-bum ba-bum *milk truck crashes into a bakery store in the background spiling white liquid and dough on the streets* BABY WANTS TO FUCK *inhales from the gas tank* honka honka honka honka *masturabtes furiously* ohhhh my goooodd~ </Text>
                </View>
                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/EicWO4eWAAoJ62D.jpg')} /></View>
                
                <Text style={styles.aaacopyright}> welcome to the cult. </Text>
                
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    play: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    header: {
        width: 240,
        height: 57,
        marginBottom: 5
    },
    textcontainer: {
        borderColor: '#fd63fe',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    copypasta: {
        color: '#fd63fe',
        textAlign: 'justify',
        fontSize: 13,
    },
    desc: {
        color: '#fd63fe',
        fontSize: 13,
        textAlign: 'center'
    },
    video: {
        paddingVertical: 10,
    },
    aaacopyright: {
        color: '#fd63fe',
        textAlign: 'center'
    },
    tweetimg: {
        height: 200,
        width: (Dimensions.get('window').width) / 1.05,
        borderRadius: 10,
    },
});

export default Vidsvids;