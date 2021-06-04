import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import GalleryStack from './GalleryStack';
import ProfileStack from './ProfileStack';


import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: '#fdcffd', width: 300 }}
        drawerContentOptions={{ activeTintColor: '#fd63fe', inactiveTintColor: '#fd63fe' }}
        drawerContent={(props) => {
          return (
            <SafeAreaView style={styles.sav}>
              <View style={styles.miniprofile}>
                <Image style={styles.prof_icon} source={require("../assets/icon.jpg")} />
                <Text style={styles.displayname}>Belle Delphine</Text>
                <Text style={styles.handle}>@bunnydelphine</Text>
                <Text style={styles.following}><Text style={{ fontWeight: 'bold', color: 'gray' }}>0</Text> Following   <Text style={{ fontWeight: 'bold', color: 'gray' }}>162K</Text> Followers {'\n'}</Text>

              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          options={{
            swipeEnabled:false,
            drawerIcon: () => (<Feather name="home" size={24} color="#fd63fe" />),
          }}
          name="Home" component={HomeStack} />
        <Drawer.Screen
          options={{
          swipeEnabled:false,
            drawerIcon: () => (<Ionicons name="person-outline" size={24} color="#fd63fe" />),
          }}
          name="Profile" component={ProfileStack} />
        <Drawer.Screen
          options={{
            swipeEnabled:false,
            drawerIcon: () => (<Ionicons name="image-outline" size={24} color="#fd63fe" />),
          }}
          name="Gallery" component={GalleryStack} />
        <Drawer.Screen
          options={{
            swipeEnabled:false,
            drawerIcon: () => (<Feather name="info" size={24} color="#fd63fe" />),
          }}
          name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
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
    color: '#fd63fe',
    fontSize: 20,
    fontWeight: 'bold',
  },
  handle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  following: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MainNavigator;