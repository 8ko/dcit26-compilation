import React from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { Paragraph } from "react-native-paper";

const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.header} source={require('../assets/shipping.jpg')} />
            <Text style={styles.title}>Items in your cart</Text>
            <Paragraph style={styles.pgph}>
                - will finish this when i'm not sleep deprived ! :) {'\n'}
                - cart item counter {'\n'}
                - make add to cart work ~_~ {'\n'}
            </Paragraph>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fdcffd',
    },
    header: {
        width: (Dimensions.get('window').width),
        height: 200,
        left: -20,
        top: -20,
        marginBottom: 10,
    },
    title: {
        color: '#fd63fe',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 2.5,
        borderColor: '#fd63fe',
        borderBottomWidth: 1,
    },

});


export default Cart;
