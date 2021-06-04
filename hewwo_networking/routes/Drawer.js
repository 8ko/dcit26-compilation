import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

import { global } from '../styles/global';

import { Feather } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: '#fff', width: 300 }}
        drawerContentOptions={{ activeTintColor: '#ea1a3c', inactiveTintColor: '#ea1a3c' }}
        drawerContent={(props) => {
          return (
            <SafeAreaView style={global.sav}>
              <View style={global.miniprofile}>
                <Image style={global.prof_icon} source={require("../assets/icon.jpg")} />
                <Text style={global.displayname}>Unknown User</Text>
                <Text style={global.handle}>@unknownuser</Text>
                <Text style={global.following}><Text style={{ fontWeight: 'bold', color: '#ea1a3c' }}>69</Text> Following   <Text style={{ fontWeight: 'bold', color: '#ea1a3c' }}>420</Text> Followers {'\n'}</Text>

              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          options={{
            swipeEnabled:false,
            drawerIcon: () => (<Feather name="home" size={24} color="#ea1a3c" />),
          }}
          name="Home" component={HomeStack} />
        <Drawer.Screen
          options={{
            swipeEnabled:false,
            drawerIcon: () => (<Feather name="info" size={24} color="#ea1a3c" />),
          }}
          name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;