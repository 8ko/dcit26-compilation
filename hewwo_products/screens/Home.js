import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, Linking } from 'react-native';

import { ScrollView } from "react-native-gesture-handler";

import { Feather } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const [products] = useState([
    {
      title: 'Gamer Girl Bathwater',
      image: require('../assets/shop/prev/ggbathwater.jpg'),
      description: 'Back on sale until I physically cannot take anymore baths, get your chance to get your Gamer Girl Bathwater! Made from real bath water <3 ',
      price: '$50.00',
      rating: '5.0 (150 users)',
      status: 'Limited Stock',
      pic1: require('../assets/shop/ggbathwater1.jpg'),
      pic2: require('../assets/shop/ggbathwater2.jpg'),
      key: 'ggbathwater',
    },
    {
      title: 'Gamer Girl Condom',
      image: require('../assets/shop/prev/ggcondom.jpg'),
      description: 'Pink lubed latex condoms for when you have the urge to "rise up" ^_-',
      price: '$10.00',
      rating: '5.0 (69 users)',
      status: 'In Stock',
      pic1: require('../assets/shop/ggcondom1.jpg'),
      pic2: require('../assets/shop/ggcondom2.jpg'),
      key: 'ggcondom'
    },
    {
      title: 'Signed Holy Bible',
      image: require('../assets/shop/prev/notsoholybible.png'),
      description: "Limited edition signed bible <3 Mailed with a little thank you and lots of kisses, rid yourself of sin ;')",
      price: '$50.00',
      rating: '4.9 (36 users)',
      status: 'Out of Stock',
      pic1: require('../assets/shop/notsoholybible1.jpg'),
      pic2: require('../assets/shop/notsoholybible2.jpg'),
      key: 'notsoholybible'
    },
    {
      title: 'Belle Delphine Collectable Cards',
      image: require('../assets/shop/prev/bellecard.jpg'),
      description: "Belle Delphine Collectable NSFW cards <3 Only 6 cards per pack, randomly selected! Hopefully you get lucky :')",
      price: '$20.00 (121 users)',
      rating: '5.0',
      status: 'In Stock',
      pic1: require('../assets/shop/bellecards1.jpg'),
      pic2: require('../assets/shop/bellecards2.jpg'),
      key: 'bellecards'
    },
    {
      title: 'Anime Belle Poster',
      image: require('../assets/shop/prev/animebellepost.jpg'),
      description: 'All of my posters are hand-signed and packaged for you in poster-tubes to stop any damage during delivery. They are all in A2 and are a premium glossy. Poster drawn by - @bellaellaarts instagram <3',
      price: '$49.99',
      rating: '5.0 (80 users)',
      status: 'In Stock',
      pic1: require('../assets/shop/animebellepost1.jpg'),
      pic2: require('../assets/shop/animebellepost2.jpg'),
      key: 'animebellepost'
    },
    {
      title: 'Christmas Poster 2019',
      image: require('../assets/shop/prev/xmaspost2019.jpg'),
      description: 'Limited stock (25) of my Christmas posters for 2019 <3 ',
      price: '$49.99',
      rating: '5.0 (24 users)',
      status: 'Limited Stock',
      pic1: require('../assets/shop/xmas2019post1.jpg'),
      pic2: require('../assets/shop/xmas2019post2.jpg'),
      key: 'xmaspost2019'
    },
    {
      title: 'NASA Girl Poster',
      image: require('../assets/shop/prev/nasagirlpost.jpg'),
      description: 'All of my posters are hand-signed and packaged for you in poster-tubes to stop any damage during delivery. They are all in A2 and are a premium glossy. ',
      price: '$49.99',
      rating: '5.0 (65 users)',
      status: 'Out of Stock',
      pic1: require('../assets/shop/nasagirlpost1.jpg'),
      pic2: require('../assets/shop/nasagirlpost2.jpg'),
      key: 'nasagirlpost'
    },
    {
      title: 'Ahegao Poster',
      image: require('../assets/shop/prev/ahegaopost.jpg'),
      description: 'All of my posters are hand-signed and packaged for you in poster-tubes to stop any damage during delivery. They are all in A2 and are a premium glossy. ',
      price: '$49.99',
      rating: '5.0 (69 users)',
      pic1: require('../assets/shop/ahegaopost1.jpg'),
      pic2: require('../assets/shop/ahegaopost2.jpg'),
      status: 'Out of Stock',
      key: 'ahegaopost'
    },
    {
      title: 'Demon Girl Poster',
      image: require('../assets/shop/prev/demongirlpost.jpg'),
      description: 'All of my posters are hand-signed and packaged for you in poster-tubes to stop any damage during delivery. They are all in A2 and are a premium glossy. ',
      price: '$49.99',
      rating: '5.0 (53 users)',
      status: 'In Stock',
      pic1: require('../assets/shop/demongirlpost1.jpg'),
      pic2: require('../assets/shop/demongirlpost2.jpg'),
      key: 'demongirlpost'
    },
    {
      title: 'Pool Poster',
      image: require('../assets/shop/prev/poolpost.jpg'),
      description: 'All of my posters are hand-signed and packaged for you in poster-tubes to stop any damage during delivery. They are all in A2 and are a premium glossy. ',
      price: '$49.99',
      rating: '5.0 (64 users)',
      status: 'In Stock',
      pic1: require('../assets/shop/poolpost1.jpg'),
      pic2: require('../assets/shop/poolpost2.jpg'),
      key: 'poolpost'
    },
  ]);



  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://hanime.tv/videos/hentai/heartful-maman-the-animation-1')}
          style={{ alignItems: 'center' }}>
          <Image source={require("../assets/shop/shoplogo.png")} style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={styles.contactPostn}>
          <Text style={styles.contact}><Feather name="phone-call" size={14} color="#fd63fe" />  CONTACT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Shipping')}
          style={styles.shippingPostn}>
          <Text style={styles.shipping}><Feather name="truck" size={15} color="#fd63fe" />  SHIPPING</Text>
        </TouchableOpacity>

        <FlatList
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productBtn}
              onPress={() => navigation.navigate('Product', item)}>
              <Image source={item.image} style={styles.productImg} />
              <Text style={styles.productText}>{item.title}</Text>
              <Text style={styles.productStatus}>{item.status}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.end}>Belle Delphine Store c. 2021</Text>
      </ScrollView>
    </View>
  );


}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fdcffd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productBtn: {
    borderWidth: 1,
    borderColor: '#fd63fe',
    paddingBottom: 10,
    marginBottom: 15,
    alignItems: 'center',
    width: (Dimensions.get('window').width) / 2.25,
    marginHorizontal: 10
  },
  productText: {
    letterSpacing: 1.25,
    textAlign: 'center',
    color: '#2B2B24',
  },
  productImg: {
    height: 172,
    width: ((Dimensions.get('window').width) / 2.25) - 2,
    marginBottom: 5,
  },
  logo: {
    height: 250,
    width: 275,
    marginBottom: 15
  },
  productStatus: {
    color: '#fd63fe',
    textAlign: 'center',
    fontSize: 10,
  },
  contactPostn: {
    alignItems: 'center',
    top: (Dimensions.get('window').width) / 2.25,
    right: (Dimensions.get('window').width) / 1.5,
    padding: 10,
    position: 'absolute',
  },
  contact: {
    fontSize: 14,
    color: '#fd63fe',
    fontWeight: 'bold',
    borderColor: '#fd63fe',
    padding: 2.5,
    borderBottomWidth: 1.25
  },
  shippingPostn: {
    alignItems: 'center',
    top: (Dimensions.get('window').width) / 2.25,
    left: (Dimensions.get('window').width) / 1.5,
    padding: 10,
    position: 'absolute',
  },
  shipping: {
    fontSize: 14,
    color: '#fd63fe',
    fontWeight: 'bold',
    borderColor: '#fd63fe',
    padding: 2.5,
    borderBottomWidth: 1.25
  },
  end: {
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1.25,
    color: '#fd63fe',
    paddingBottom: 5
  }
});

