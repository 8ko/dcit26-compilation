import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { FontAwesome } from '@expo/vector-icons';

const Gallery = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/Screen_Shot_2019_07_03_at_12.26.13_PM.jpg')} /></View>
                <View style={styles.textcontainer}>
                    <Text style={styles.copypasta}>    wait, wait, wait.... hold your horses... uhm... YOU'RE A GIRL GAMER?!!?! O_O Not to be a freak, but.. just when I thought you couldn't get more attractive.. you started playing video games. Nicely done, m'lady. You've just become every man's dream woman. If you had missed a couple before, now you can be sure you've got us ALL "drooling", lol.</Text>
                </View>

                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/Eoq9dH8XUAIPw3k.jpg')} /></View>

                <View style={styles.video}>
                    <YoutubePlayer
                        height={220}
                        width={(Dimensions.get('window').width) / 1.05}
                        videoId={'xG7Zln9981A'}
                    />
                </View>

                <View style={styles.textcontainer}>
                    <Text style={styles.copypasta}>    No, you’re NOT a real gamer. {'\n\n'}    I’m so sick of all these people that tho k they’re gamers. No, you’re not. Most of you are not even close to being gamers. I see these people saying “I put well over 100 hours in this game, it’s great!” that’s nothing, most of us can easily put 300+ hours in all our games. I see people who only have a Nintendo Switch and claim to be gamers. Come talk to me when you pick up a PS4 controller then we be friends.{'\n\n'}    Also DEAR ALL WOMEN: Pokémon is not a real game. Animal Crossing is not a real game. The Sims is not a real game. Mario is not a real game. Stardew valley is not a real game. Mobile games are NOT.REAL.GAMES. put down the baby games and play something that requires challenge and skill for once.{'\n\n'}    Sincerely, all of the ACTUAL gamers. </Text>
                </View>

                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/EmpOpNIW4AAr45Y.jpg')} /></View>
                <View style={styles.video}>
                    <YoutubePlayer
                        height={220}
                        width={(Dimensions.get('window').width) / 1.05}
                        videoId={'1HNGicYIdX4'}
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.copypasta}>    o.o ..... .{'<.<'}.... O.o... Hold on, lady. You... are a.. girl gamer? Shifts in chair, tugging at collar{'>.>'} A fine, alluring lady such as yourself... Also has an intellectual side? With your ravishing, simply bewitching beauty, you pull me in...And then you penetrate my level of understanding of perfection..By informing me that you, are indeed, a girl gamer, who plays Minecraft!!! O.O My beautiful lady. I will treat you right forever, I will cherish and treasure you, I will mine you diamonds and protect you from Endermen. My lady.. be my player two....</Text>
                </View>

                <View style={styles.video}>
                    <YoutubePlayer
                        height={220}
                        width={(Dimensions.get('window').width) / 1.05}
                        videoId={'PbW8QmTd-Ho'}
                    />
                </View>

                <View style={styles.textcontainer}>
                    <Text style={styles.copypasta}>    So the other day, I was playing rainbow six siege, and I heard one of my teammates make a callout in the voice chat. It was a real life gamer girl. God, I kid you not, I just stopped playing and pulled my dick out. “fuck, Fuck!” I was yelling in voice chat. I just wanted to hear her voice again. “Please,” I moaned. But she left the lobby. I was crying and covered in my own cum, but I remembered that I could find recent teammates in the ubiplay friends tab. I frantically closed down siege and opened the tab, to find out she had TTV IN HER NAME!!! She was streaming, and only had 100 viewers!!! The competition was low, so I made the first move and donated my months rent to her. I was already about to pre. She read my donation in the chat. God this is the happiest I’ve been in a long time.{'\n\n'}    I did a little research, and found out where she goes to school, but I am a little nervous to talk to her in person, and need support. Any advice before my Uber gets to her middle school?</Text>
                </View>

                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/EghaX3KVgAASx2W.jpg')} /></View>
                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/Eg7PLihXgAcV8Mk.jpg')} /></View>

                <View style={styles.video}><Image style={styles.tweetimg} source={require('../assets/tweets/EghacZiVgAADb9J.jpg')} /></View>


                <Text style={{color:'#fd63fe', textAlign:'center'}}>    Down the rabbit hole we go...</Text>

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
        flex: 1,
        padding: 10,
        backgroundColor: '#fdcffd',
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
        marginBottom: 10
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
    }
});

export default Gallery;
