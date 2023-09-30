import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderComponent } from '../components/HeaderComponent';
import { AnimalBox } from '../components/AnimalBox';

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

export const Menu = ({ firstName }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent />
      <View style={styles.fullHolder}>
        <Text style={styles.mainText}>{"Cześć, " + firstName}</Text>
        <View style={styles.textHolder}>
          <Image source={require('../assets/535239.png')} style={styles.image} />
          <Text style={styles.secondText}>{"Twoja lokalizacja to: "}</Text>
          <Text style={styles.location}>{"Kraków"}</Text>
        </View>
        <View style={styles.animalsSection}>
          <Text style={styles.thirdText}>{"Psy i koty w twojej okolicy"}</Text>
        </View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsHolder}>
            <AnimalBox
              imageSource={require('../assets/dog.jpg')}
              animalName={'example'}
              years={'3 years'}
              desc={'description about animal'}
            />
            <AnimalBox
              imageSource={require('../assets/dog.jpg')}
              animalName={'example'}
              years={'3 years'}
              desc={'description about animal'}
            />
            <AnimalBox
              imageSource={require('../assets/dog.jpg')}
              animalName={'example'}
              years={'3 years'}
              desc={'description about animal'}
            />
            <AnimalBox
              imageSource={require('../assets/dog.jpg')}
              animalName={'example'}
              years={'3 years'}
              desc={'description about animal'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
