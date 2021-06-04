import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, Button, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CartButton from './CartButton';

const Product = ({ route, navigation }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('we are in addToCart');
        console.log(route.params.title);
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
                    <Text>{cart.length+1}</Text>
                ),
            });

        }
    };
    const toCart = () => {
        addToCart(route.params.title);
        itemHandler();
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image source={route.params.pic1} style={styles.productImg} />
                        <Image source={route.params.pic2} style={styles.productImg} />
                    </ScrollView>
                    <Text style={styles.productStatus}>(swipe horizontally to scroll)</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <Text style={styles.price}>{route.params.price}</Text>
                    <Text style={styles.rating}><AntDesign name="star" size={15} color="#fd63fe" /> {route.params.rating}</Text>
                    <Text style={styles.desc}>{route.params.description}</Text>
                </View>
                <Text style={styles.productStatus}>{route.params.status}</Text>
                {/* <CartButton /> */}
                <View style={styles.purchase}>
                    <Button title="Add to Cart" color="#fd63fe" onPress={() => toCart()} />
                    <Text>{cart.length}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdcffd',
        justifyContent: 'center',
        padding: 10,
    },
    viewer: {
        marginTop: 5,
        height: 400,
        paddingHorizontal: 15,
    },
    details: {
        marginTop: 10,
        borderColor: '#fd63fe',
        borderTopWidth: 1,
        marginHorizontal: 50
    },
    productImg: {
        height: '100%',
        width: (Dimensions.get('window').width) / 1.5,
        marginHorizontal: (Dimensions.get('window').width) * .10,
        paddingHorizontal: (Dimensions.get('window').width) * .10,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        letterSpacing: 1.25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        letterSpacing: 1.2,
        textAlign: 'center',
    },
    rating: {
        textAlign: 'center',
    },
    desc: {

        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    },
    productStatus: {
        color: '#fd63fe',
        textAlign: 'center',
        fontSize: 12
    },
    purchase: {
        alignItems: 'center',
        marginBottom: 5
    }
});