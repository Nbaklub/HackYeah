import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons, MaterialIcons} from 'react-native-vector-icons';
import { useFonts, fredoka } from '@expo-google-fonts/fredoka-one';

const dogview = ({ navigation }) => {
    return(
        <SafeAreaView>
            <TouchableOpacity style={{width: 'auto', height: 'auto', position: 'absolute', zIndex: 1, marginLeft: 20, marginTop: 50}} 
                onPress={() => {navigation.navigate('Menu');}}>
                <Ionicons name="arrow-back" size={40} color="white"/>
            </TouchableOpacity>
            <View style={{width: '100%', height: 'auto'}}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Golden_Retriever_standing_Tucker.jpg/640px-Golden_Retriever_standing_Tucker.jpg' }} style={{width: '100%', height: 250, marginTop: 40}} />
            </View>
            <View style={{width: 'auto', height: '20%', marginTop: 10, justifyContent: 'center', marginLeft: 20}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', fontFamily: 'fredoka'}}>Bella</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#064E57'}}>Border Collie</Text>
                <View style={{position: 'absolute', width: '100%', height: 'auto', zIndex: 1, alignItems: 'flex-end', paddingRight: 10}}>
                    <Ionicons name="female-sharp" size={60} color="#FF00FF"/>
                </View>
            </View>
            <View style={{width: 'auto', height: 'auto', justifyContent: 'center', }}>
                <View style={{flexDirection: 'row',alignItems: 'center', marginLeft: 20}}>
                    <Ionicons name="paw-outline" size={40} color="black"/>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10}}>About Bella</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
                    <View style={{width: '23%', height: 60, backgroundColor:'gray', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Age</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold', color: '#064E57'}}>4 years</Text>
                    </View>
                    <View style={{width: '23%', height: 60, backgroundColor:'gray', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Weight</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold', color: '#064E57'}}>10 kg</Text>
                    </View>
                    <View style={{width: '23%', height: 60, backgroundColor:'gray', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Height</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold', color: '#064E57'}}>60 cm</Text>
                    </View>
                    <View style={{width: '23%', height: 60, backgroundColor:'gray', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Color</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold', color: '#064E57'}}>Gold</Text>
                    </View>
                </View>
            </View>
            <View style={{height: '30%',justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row',alignItems: 'center', marginLeft: 20}}>
                    <MaterialIcons name="healing" size={40} color="black"/>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10}}>Bella's status</Text>
                </View>
                <View style={{flexDirection: 'row', }}>
                    <View style={{marginLeft: 20, marginTop: 15, flexDirection: 'row',}}>
                        <Image source={require('../assets/sercezlapa.png')}/>
                        <View style={{marginTop: 5}}>
                            <Text styl={{fontSize: 12, fontWeight: 'bold',}}>Health</Text>
                            <Text style={{color: 'lightgreen', fontWeight: 'bold'}}>Last vaccination 3 m ago</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', }}>
                    <View style={{marginLeft: 20, marginTop: 15, flexDirection: 'row',}}>
                        <Image source={require('../assets/miska.png')}/>
                        <View style={{marginTop: 5}}>
                            <Text styl={{fontSize: 12, fontWeight: 'bold',}}>For adpotion</Text>
                            <Text style={{color: 'lightgreen', fontWeight: 'bold'}}>For adpotion from: 3 month</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
});
export default dogview;