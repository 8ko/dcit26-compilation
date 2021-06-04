import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

const CartButton = ({ route, navigation }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('we are in addToCart');
        // console.log(route.params.title);
    }
    const itemHandler = () => {
        if (route.params.status == 'Out of Stock') {
            Alert.alert(
                'Sorry',
                'Item is out of stock! :(');
        } else {
            Alert.alert(
                'Success',
                'Item has been added to your cart!');

            navigation.setOptions({
                headerRight: () => (
                    <Text>{cart.length + 1}</Text>
                ),
            });
        }
    };
    const toCart = () => {
        // addToCart(route.params.title);
        itemHandler();
    };

    return (
        <View style={styles.purchase}>
            <Button title="Add to Cart" color="#fd63fe" onPress={() => toCart()} />
            <Text>{cart.length}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    purchase: {
        alignItems: 'center',
        marginBottom: 5
    }
});

export default CartButton;