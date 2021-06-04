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
                        <HeaderBackButton tintColor="#FF6961" onPress={() => navigation.navigate('Home')} />
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor: '#FF6961',
                    headerStyle: { backgroundColor: '#F5F5DD' },
                    drawerIcon: () => (<Feather name="home" size={24} color="#FF6961" />)
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;