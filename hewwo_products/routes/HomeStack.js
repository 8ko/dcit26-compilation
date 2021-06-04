import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Shipping from '../screens/Shipping';
import Contact from '../screens/Contact';
import Cart from '../screens/Cart';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#fd63fe',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome name="bars" size={22} color="#fd63fe" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Feather name="shopping-cart" size={22} color="#fd63fe" onPress={() => navigation.navigate('Cart')} />
            </View>
          ),
          headerStyle: { backgroundColor: '#fdcffd' }
        }}
      />

      <Stack.Screen name="Product" component={Product}
        options={{
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Feather name="shopping-cart" size={20} color="#fd63fe" onPress={() => navigation.navigate('Cart')} />
            </View>
          ),
          headerTitleAlign: 'center',
          headerTintColor: '#fd63fe',
          headerStyle: { backgroundColor: '#fdcffd' },
        }}
      />
      <Stack.Screen name="Shipping" component={Shipping}
        options={{
          headerTitle: 'Shipping & Returns',
          headerTitleAlign: 'center',
          headerTintColor: '#fd63fe',
          headerStyle: { backgroundColor: '#fdcffd' },
        }}
      />
      <Stack.Screen name="Contact" component={Contact}
        options={{
          headerTitle: 'Contact me',
          headerTitleAlign: 'center',
          headerTintColor: '#fd63fe',
          headerStyle: { backgroundColor: '#fdcffd' },
        }}
      />
      <Stack.Screen name="Cart" component={Cart}
        options={{
          headerTitle: 'Cart',
          headerTitleAlign: 'center',
          headerTintColor: '#fd63fe',
          headerStyle: { backgroundColor: '#fdcffd' },
        }}
      />
    </Stack.Navigator>
  )
}


export default HomeStack;