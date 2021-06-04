import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import Profile from '../screens/Profile';



const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerLeft: () => (
                        <HeaderBackButton tintColor="#fd63fe" onPress={() => navigation.navigate('Home')} />
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

export default ProfileStack;