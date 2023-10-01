import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { HeaderComponent } from '../components/HeaderComponent';
import { AnimalBox } from '../components/AnimalBox';
import { useNavigation } from '@react-navigation/native';
import { dogs } from '../assets/dogs';
import MapView, { Marker } from 'react-native-maps';


const Menu = () => {
  const navigation = useNavigation();
  const initialRegion = {
    latitude: 50.0614300, // Środek Krakowa lub inna współrzędna geograficzna w Krakowie
    longitude: 19.9365800, // Środek Krakowa lub inna współrzędna geograficzna w Krakowie
    latitudeDelta: 0.2, // Wartość delta do zmiany szerokości geograficznej
    longitudeDelta: 0.2, // Wartość delta do zmiany długości geograficznej
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent />
      <View style={styles.fullHolder}>
        <Text style={styles.mainText}>{"Hello, Danuta"}</Text>
        <View style={styles.textHolder}>
          <Image source={require('../assets/535239.png')} style={styles.image} />
          <Text style={styles.secondText}>{"Your location is: "}</Text>
          <Text style={styles.location}>{"Kraków"}</Text>
        </View>
        <View style={styles.animalsSection}>
          <Text style={styles.thirdText}>{"Cats and dogs to adpotion around you"}</Text>
        </View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsHolder}>
            {dogs.map((item, index) => (
                    <AnimalBox key={index} item={item} index={index} navigation={navigation} />
                ))}  
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => {navigation.navigate('main');}}>
          <MapView
                  style={{width: '100%', height: 300, marginTop: 10, borderRadius: 15}}
                  initialRegion={initialRegion}
                  >

          </MapView>
        </TouchableOpacity>      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  secondText: {},
  textHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullHolder: {
    margin: 20,
    flex: 1, 
  },
  location: {
    color: 'red',
    fontWeight: 'bold',
  },
  animalsSection: {
    marginTop: 40,
  },
  thirdText: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  cardsHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default Menu;
