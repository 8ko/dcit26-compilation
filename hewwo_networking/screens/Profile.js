import React from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { global } from '../styles/global';

import { Ionicons } from '@expo/vector-icons';

const Profile = ({ route }) => {

  const data = route.params;
  return (
    <View style={global.containerProfile}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: 10, alignItems: 'center'}}>
        <Image style={global.userimgProfile} source={{ uri: data.picture.large }}/>      
          <Text style={global.userNick}>{data.name.first} {data.name.last}, {data.dob.age-10}</Text>
          <Text style={global.location}><Ionicons name="airplane-outline" size={14} color="#333" />  {data.location.city}, {data.location.state}, {data.location.country}</Text>
          <Text style={global.location}><Ionicons name="location-outline" size={14} color="#333" />  {data.registered.age} km away from you</Text>
          <Text style={global.location}><Ionicons name="call-outline" size={14} color="#333" />  {data.cell}</Text>
        </View>

        <View style={{marginBottom: 5}}>
          <Text style={global.userAbt}>About {data.name.first} </Text>
          <Text style={global.userDesc}>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio vel leo vehicula tempor. Mauris in mollis ante. Morbi sed mattis ligula. Morbi id erat urna. 
          
          {'\n\n'}    Sed consectetur lorem eu orci vulputate, ut hendrerit lorem gravida. Aenean at cursus diam. Sed ac aliquet neque, et ultrices orci.</Text>
        </View>
        <View style={{}}>
          <Text style={global.location}><Ionicons name="at" size={14} color="#333" />  {data.login.password}{data.login.salt}</Text>
          <Text style={global.location}><Ionicons name="mail-outline" size={14} color="#333" />  {data.email}</Text>
        </View>
        <Text style={global.location}><Ionicons name="calendar-outline" size={14} color="#333" />  {data.registered.date}</Text>
        
      </ScrollView >
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Success',
            'You have sent this user a request to chat!');
        }}
        style={global.chatBtn}>
        <Ionicons name="chatbubble-outline" size={24} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Success',
            'You have sent this user a heart!');
        }}
        style={global.heartBtn}>
        <Ionicons name="heart-outline" size={24} color="#FFF" />
      </TouchableOpacity>

    </View>
    
  );
};


export default Profile;
