import React, { useState } from "react";
import { Alert, Text, Image, View, TextInput, StyleSheet, Dimensions, Button } from "react-native";

const Contact = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [Email, setEmail] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [Mssg, setMssg] = useState('');

    const fNameHandler = (fName) => {
        setfName(fName);
    };
    const lNameHandler = (lName) => {
        setlName(lName);
    };
    const EmailHandler = (Email) => {
        setEmail(Email);
    };
    const phoneNumHandler = (phoneNum) => {
        setphoneNum(phoneNum);
    };
    const MssgHandler = (Mssg) => {
        setMssg(Mssg);
    };

    const sendMail = () => {
        if (
            Email == '' | Email == ' ' | Mssg == '' | Mssg == ' '
        ) {
            Alert.alert(
                'Alert',
                'Field cannot be blank.');
        } else {
            setfName('');
            setlName('');
            setEmail('');
            setphoneNum('');
            setMssg('');
            Alert.alert(
                'Success',
                'Your message has been sent.');
        }

    }
    return (
        <View style={styles.container}>
            <Image style={styles.header} source={require('../assets/contact.jpg')} />
            <Text style={styles.title}>For all support needed with orders, please leave your order number when you write a message. Thank you cutie {'<3\n'}</Text>

            <View style={styles.info}>
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#fd63fe"
                    style={styles.userInput}
                    onChangeText={fNameHandler}
                    value={fName}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#fd63fe"
                    style={styles.userInput}
                    onChangeText={lNameHandler}
                    value={lName}
                />
            </View>

            <View style={styles.info}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#fd63fe"
                    require={true}
                    style={styles.userInput}
                    onChangeText={EmailHandler}
                    value={Email}
                />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#fd63fe"
                    keyboardType="number-pad"
                    style={styles.userInput}
                    onChangeText={phoneNumHandler}
                    value={phoneNum}
                />
            </View>

            <TextInput
                placeholder="Type your message here..."
                placeholderTextColor="#fd63fe"
                multiline={true}
                numberOfLines={5}
                require={true}
                textAlignVertical='top'
                textAlign='left'
                maxLength={240}
                style={styles.userMssg}
                onChangeText={MssgHandler}
                value={Mssg}
            />
            <Button title=" ADD " color="#fd63fe" onPress={sendMail} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fdcffd',
        alignItems: 'center'
    },
    header: {
        width: (Dimensions.get('window').width),
        height: 200,
        marginBottom: 10,
    },
    title: {
        color: '#fd63fe',
        paddingHorizontal: 30,
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 2.5,
        textAlign: 'center',
    },
    userInput: {
        borderColor: '#fd63fe',
        borderWidth: 1,
        padding: 5,
        width: '40%',
        marginHorizontal: 10,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        color: '#fd63fe'
    },
    userMssg: {
        borderColor: '#fd63fe',
        borderWidth: 1,
        padding: 5,
        width: '81%',
        height: '15%',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fd63fe',

    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    }

});

export default Contact;
