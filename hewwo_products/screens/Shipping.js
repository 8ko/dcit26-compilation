import React from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { Paragraph } from "react-native-paper";

const Shipping = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.header} source={require('../assets/shipping.jpg')} />
            <View style={styles.announce}>
                <Text style={styles.title}>Shipping</Text>
                <Paragraph style={styles.pgph}>
                    Due to items being personally and lovingly hand-packed and sent from the UK, shipping can vary depending on where you are. UK items should be delivered within 1 week, items outside the UK can take up to 3 weeks (at the latest). The mail is shipped as tracked, if there are any issues or you have any questions prior to ordering to do with shipping, then please fill out the form in the contact section of the website. ^-^
                </Paragraph>
                <Text style={styles.title}>Returns {'&'} Refunds</Text>
                <Paragraph style={styles.pgph}>
                    Unfortunately due to the nature of the business and the type of merchandise, I do not currently issue refunds. If your item hasn't been delivered correctly, you can send me a message on the contact form on the website and I will follow up with your issue there. {'<3'}
                </Paragraph>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdcffd',
    },
    header: {
        width: (Dimensions.get('window').width),
        height: 200,
    },
    announce: {
        padding: 20
    },
    title: {
        color: '#fd63fe',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 2.5,
        borderColor: '#fd63fe',
        borderBottomWidth: 1,
    },
    pgph: {
        textAlign: 'justify',
        color: '#2B2B24',
        marginBottom: 10,
    }
});


export default Shipping;
