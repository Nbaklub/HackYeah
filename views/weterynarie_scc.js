import React from "react";
import { View, StyleSheet, ScrollView, Text, Linking, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Dodaj import dla AntDesign
import { Wetexp } from "../assets/Wetexport";
import { HeaderComponent } from "../components/HeaderComponent";


const stars = (val) => {
    const starCount = parseInt(val); // Konwertuj na liczbę całkowitą
    return Array(5).fill(0).map((_, index) => {
      return starCount > index ? '★' : '☆';
    });
  };

const renderWet = (item, { phoneNumber }) => {
    const handlePhoneCall = () => {
        const phoneNumberToCall = `tel:${item.Tel}`;
        Linking.openURL(phoneNumberToCall);
      };
  return (
    <View>
        <View key={item.id} style={styles.wetItem}>
            <Text style={styles.wetName}>{item.name}</Text>
            <View style={styles.rating}>
                {stars(item.rating).map((star, index) => (
                <AntDesign
                    key={index}
                    name={star === '★' ? 'star' : 'staro'}
                    size={20}
                    color={star === '★' ? 'gold' : 'black'}
                />
                ))}
            </View>
            <View style={{position: 'absolute', alignItems: 'flex-end', width: '100%'}}>
            <TouchableOpacity onPress={handlePhoneCall}>
                <View>
                    <AntDesign name='phone' size={24} color="black"/>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const WetScc = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView>
        {Wetexp.map((item) => renderWet(item, item.Tel))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  wetItem: {
    elevation: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    width: '90%',
    height: 80,
    marginLeft: '5%',
    backgroundColor: '#E9E9E9',
    borderRadius: 25,
    marginVertical: 5,
  },
  wetName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default WetScc;
