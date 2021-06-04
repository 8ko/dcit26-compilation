import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#ea1a3c',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome name="user-o" size={24} color="#ea1a3c" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            </View>

          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Ionicons name="chatbubble-outline" size={24} color="#ea1a3c" onPress={() => { }} />
            </View>
          ),
          headerStyle: { backgroundColor: '#fff' },
          drawerIcon: () => (<Feather name="home" size={24} color="#000" />)
        }}
      />
      <Stack.Screen name="Profile" component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#ea1a3c',
          headerStyle: { backgroundColor: '#fff' },
          drawerIcon: () => (<Feather name="home" size={24} color="#fff" />)
        }}
      />
    </Stack.Navigator>
  )
}


export default HomeStack;