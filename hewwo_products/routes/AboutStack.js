import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import About from '../screens/About';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={About}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <FontAwesome name="bars" size={22} color="#fd63fe" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
              </View>
            ),
            headerTitleAlign: 'center',
            headerTintColor: '#fd63fe',
            headerStyle: { backgroundColor: '#fdcffd' },
            drawerIcon: () => (<Feather name="home" size={24} color="#fd63fe" />)
          }}
        />
      </Stack.Navigator>
  )
}

export default AboutStack;