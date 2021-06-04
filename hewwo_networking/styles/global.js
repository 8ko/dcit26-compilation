import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerProfile: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    userNick: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Roboto',
        letterSpacing: 1.35,
        color: '#000',
    },
    location: {
        color: '#333',
        fontSize: 14,
    },
    userimg: {
        marginTop: -20,
        height: 250,
        width: 250,
        borderRadius: 15,
        marginBottom: 5,
        borderColor: '#555',
        borderWidth: 1
    },
    userimgProfile: {
        height: 250,
        width: 250,
        borderRadius: 15,
        marginBottom: 5,
        alignItems: 'center',
        borderColor: '#555',
        borderWidth: 1
    },
    randomBtn: {
        width: 45,
        height: 45,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 60,
        paddingVertical: 10,
        backgroundColor: '#ea1a3c'
    },
    reactn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 150
    },
    userAbt: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'Roboto',
        letterSpacing: 1.35,
        color: '#000',
    },
    userDesc: {
        textAlign: 'justify',
        alignItems: 'center',
        color: '#333',
        fontSize: 14,
    },
    heartBtn: {
        width: 45,
        height: 45,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 60,
        paddingVertical: 10,
        position: 'absolute',
        right: 15,
        bottom: 15,
        backgroundColor: '#ea1a3c'
    },
    chatBtn: {
        width: 45,
        height: 45,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 60,
        paddingVertical: 10,
        position: 'absolute',
        left: 15,
        bottom: 15,
        backgroundColor: '#ea1a3c'
    },
    //drawer.js
    prof_icon: {
        height: 70,
        width: 70,
        borderRadius: 60,
      },
      sav: {
        flex: 1,
        top: 30,
      },
      miniprofile: {
        height: 170,
        padding: 10,
        borderBottomColor: '#C7C7C7',
        borderBottomWidth: 0.50,
        marginBottom: 10
      },
      displayname: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
      },
      handle: {
        fontSize: 14,
        color: '#ea1a3c',
        marginBottom: 10,
      },
      following: {
        fontSize: 14,
        color: 'gray',
      },





})