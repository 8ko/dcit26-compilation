import React from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions, Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TweetsProfile = props => {
    return (

        <View style={styles.container}>
                <View style={styles.tweets}>
                    <Image style={styles.icon} source={require('../assets/icon.jpg')} />
                    <View style={styles.tweettext}>
                        <View style={styles.namehandledate}>
                            <Text style={styles.tweetname}>Belle Delphine</Text>
                            <Text style={styles.handledate}> @bunnydelphine · 01 Apr</Text>
                        </View>
                        <Text style={styles.tweetcontent}>Hey bro, are you single?</Text>
                        <Image style={styles.tweetimg} source={require('../assets/tweets/EsSIhlAXIAQwb-j.jpg')} />
                        <View style={styles.reactions}>
                            <Text style={styles.reactionsnum}><Ionicons name="chatbubble-outline" size={14} color="gray" />  4,340</Text>
                            <Text style={styles.reactionsnum}><AntDesign name="retweet" size={14} color="gray" />  2,246</Text>
                            <Text style={styles.reactionsnum}><Ionicons name="heart-outline" size={14} color="gray" />  64.1K</Text>
                            <Ionicons name="share-social-outline" size={15} color="gray" />
                        </View>
                    </View>

                </View>

                <View style={styles.tweets}>
                    <Image style={styles.icon} source={require('../assets/icon.jpg')} />
                    <View style={styles.tweettext}>
                        <View style={styles.namehandledate}>
                            <Text style={styles.tweetname}>Belle Delphine</Text>
                            <Text style={styles.handledate}> @bunnydelphine · 23 Mar</Text>
                        </View>
                        <Text style={styles.tweetcontent}>stonks :3</Text>
                        <Image style={styles.tweetimg} source={require('../assets/tweets/Es8XIkfXYAMoX7H.jpg')} />
                        <View style={styles.reactions}>
                            <Text style={styles.reactionsnum}><Ionicons name="chatbubble-outline" size={14} color="gray" />    717</Text>
                            <Text style={styles.reactionsnum}><AntDesign name="retweet" size={14} color="gray" />  1,810</Text>
                            <Text style={styles.reactionsnum}><Ionicons name="heart-outline" size={14} color="gray" />  46.3K</Text>
                            <Ionicons name="share-social-outline" size={15} color="gray" />
                        </View>
                    </View>

                </View>

                <View style={styles.tweets}>
                    <Image style={styles.icon} source={require('../assets/icon.jpg')} />
                    <View style={styles.tweettext}>
                        <View style={styles.namehandledate}>
                            <Text style={styles.tweetname}>Belle Delphine</Text>
                            <Text style={styles.handledate}> @bunnydelphine · 13 Mar</Text>
                        </View>
                        <Text style={styles.tweetcontent}>Why do you think i am the way i am? Idk, just think about it ^-^</Text>
                        <Image style={styles.tweetimg} source={require('../assets/tweets/EsRBNylXUAAkrcb.jpg')} />
                        <View style={styles.reactions}>
                            <Text style={styles.reactionsnum}><Ionicons name="chatbubble-outline" size={14} color="gray" />  1,594</Text>
                            <Text style={styles.reactionsnum}><AntDesign name="retweet" size={14} color="gray" />  1,910</Text>
                            <Text style={styles.reactionsnum}><Ionicons name="heart-outline" size={14} color="gray" />  52.4K</Text>
                            <Ionicons name="share-social-outline" size={15} color="gray" />
                        </View>
                    </View>

                </View>

                <View style={styles.tweets}>
                    <Image style={styles.icon} source={require('../assets/icon.jpg')} />
                    <View style={styles.tweettext}>
                        <View style={styles.namehandledate}>
                            <Text style={styles.tweetname}>Belle Delphine</Text>
                            <Text style={styles.handledate}> @bunnydelphine · 26 Feb</Text>
                        </View>
                        <Text style={styles.tweetcontent}>my life is complete :') {'\n'}I'm so thankful to be accepted into this community, even if everybody makes fun of me... I'm still thankful to be your internet troll ♥</Text>
                        <Text style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('#BeastRewindhttps://twitter.com/hashtag/BeastRewind')}>#BeastRewind</Text>
                        <Image style={styles.tweetimg} source={require('../assets/tweets/Eqsc_zMXMAEoING.jpg')} />
                        <View style={styles.reactions}>
                            <Text style={styles.reactionsnum}><Ionicons name="chatbubble-outline" size={14} color="gray" />    719</Text>
                            <Text style={styles.reactionsnum}><AntDesign name="retweet" size={14} color="gray" />  1,128</Text>
                            <Text style={styles.reactionsnum}><Ionicons name="heart-outline" size={14} color="gray" />  61.4K</Text>
                            <Ionicons name="share-social-outline" size={15} color="gray" />
                        </View>
                    </View>

                </View>

                <View style={styles.tweets}>
                    <Image style={styles.icon} source={require('../assets/icon.jpg')} />
                    <View style={styles.tweettext}>
                        <View style={styles.namehandledate}>
                            <Text style={styles.tweetname}>Belle Delphine</Text>
                            <Text style={styles.handledate}> @bunnydelphine · 26 Feb</Text>
                        </View>
                        <Text style={styles.tweetcontent}>My next stunt?</Text>
                        <Image style={styles.tweetimg} source={require('../assets/tweets/EqbiQ11W8Acy4y-.jpg')} />
                        <View style={styles.reactions}>
                            <Text style={styles.reactionsnum}><Ionicons name="chatbubble-outline" size={14} color="gray" />  1,270</Text>
                            <Text style={styles.reactionsnum}><AntDesign name="retweet" size={14} color="gray" />  2,032</Text>
                            <Text style={styles.reactionsnum}><Ionicons name="heart-outline" size={14} color="gray" />  55.8K</Text>
                            <Ionicons name="share-social-outline" size={15} color="gray" />
                        </View>
                    </View>

                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fdcffd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Roboto',
        textAlign: 'justify',
        letterSpacing: 1.5
    },
    tweets: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderColor: '#c7c7c7',
        borderBottomWidth: 0.75,
        marginBottom: 10
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderColor: '#fdcffd',
        borderWidth: 2
    },
    tweettext: {
        flexDirection: 'column'
    },
    tweetname: {
        fontSize: 14.5,
        color: '#333',
        fontWeight: 'bold'
    },
    handledate: {
        color: 'gray',
    },
    namehandledate: {
        paddingLeft: 5,
        flexDirection: 'row'
    },
    tweetcontent: {
        paddingLeft: 5,
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        flex: 1,
        width: (Dimensions.get('window').width) / 1.30
    },
    tweetimg: {
        height: 150,
        width: (Dimensions.get('window').width) / 1.30,
        borderRadius: 10
    },
    reactions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    reactionsnum: {
        color: 'gray',
        fontSize: 12,
        alignItems: 'center',
    }

});

export default TweetsProfile;