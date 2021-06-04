import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FF6961',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome name="bars" size={22} color="#FF6961" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            </View>

          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <FontAwesome name="search" size={22} color="#FF6961" onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=TL470fJMi7w') }} />
            </View>
          ),
          headerStyle: { backgroundColor: '#F5F5DD' },
          drawerIcon: () => (<Feather name="home" size={24} color="#FF6961" />)
        }}
      />
      <Stack.Screen name="Profile" component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FF6961',
          headerStyle: { backgroundColor: '#F5F5DD' },
          drawerIcon: () => (<Feather name="home" size={24} color="#FF6961" />)
        }}
      />
    </Stack.Navigator>
  )
}


export default HomeStack;