import React from "react";
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, Button, Image, Text, View, Callout } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Modal } from 'react-native';
import {AntDesign, Entypo } from 'react-native-vector-icons';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { locations } from "../assets/data";
import {Ionicons, FontAwesome5} from 'react-native-vector-icons'
const CustomMarker = ({ item, index, navigation }) => {
    const [showInfo, setShowInfo] = useState(false);



    const handleMarkerPress = () => {
      setShowInfo(!showInfo);
    };
    return (
        
            <Marker
            coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
            }}
            onPress={handleMarkerPress}
            >
            <View style={custommarkers.customMarkerContainer}>
                <Image source={{ uri: item.logo }} style={custommarkers.customMarkerImage} />
            </View>
            {showInfo && (
            <View style={{width: 300, height: 'auto', backgroundColor: 'white', borderWidth: 2, borderColor: 'gray', borderRadius: 10,padding: 10,}}>
                <Text style={{fontWeight: 'bold'}}>{item.Name}</Text>
                <Text>{item.opis}</Text>
            </View>
            )}
        </Marker>
        
    );
  };
  
  

const main = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Brak uprawnień do dostępu do lokalizacji');
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (err) {
        setError('Błąd podczas uzyskiwania lokalizacji');
      }
    })();
  }, []);
    const initialRegion = {
        latitude: 50.0614300, // Środek Krakowa lub inna współrzędna geograficzna w Krakowie
        longitude: 19.9365800, // Środek Krakowa lub inna współrzędna geograficzna w Krakowie
        latitudeDelta: 0.35, // Wartość delta do zmiany szerokości geograficznej
        longitudeDelta: 0.35, // Wartość delta do zmiany długości geograficznej
    };
    return(
        <View style={{paddingTop: 10}}> 
            <TouchableOpacity style={{width: 'auto', height: 'auto', position: 'absolute', zIndex: 1, marginLeft: 20, marginTop: 50}} 
                onPress={() => {navigation.navigate('Menu');}}>
                <Ionicons name="arrow-back" size={40} color="white"/>
            </TouchableOpacity>
            <View style={styles.container}>
                <MapView
                style={styles.map}
                initialRegion={initialRegion}
                >
                {locations.map((item, index) => (
                    <CustomMarker key={index} item={item} index={index} navigation={navigation} />
                ))}    
                    
                
            </MapView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
      },
      map: {
        flex: 1,
      },
      Informaty: {
        width: '85%',
        height: 300,

      }
});
const custommarkers = StyleSheet.create({
    customMarkerContainer: {
      justifyContent: 'center',
      paddingLeft: 2,
      width: 35,
      height: 35,
      borderRadius: 18,
      backgroundColor: 'gray'
    },
    customMarkerImage: {
      width: 30,
      height: 30,
      marginRight: 8,
      borderRadius: 16,
      resizeMode: 'center',
    },
  });

export default main;