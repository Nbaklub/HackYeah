import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ButtonData } from '../components/ButtonData';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

export const Profile = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView>
           <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('First')}>
            <View style={styles.arrow}><FontAwesomeIcon icon={faAngleLeft} size={40}/></View>
           </TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.pani} source={require('../assets/babka.png')} />
            </View>

            <View style={styles.dane}>
                <View style={styles.dataHolder}>
                    <Text style={[styles.daneText, {marginBottom: 10, marginLeft: 10}]}>{"Danuta Rogalska"}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Image style={[styles.wyloguj, {marginTop: 10}]}source={require('../assets/signout.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <View style={styles.mail2}>
                        <Image style={styles.mail} source={require('../assets/mail.png')} />
                        <Text style={[styles.emaila, {fontWeight: 'bold'}]}>{"   "}examplemail@gmail.com</Text>
                    </View>
                    <View style={styles.mail2}>
                        <Image style={styles.sluchawka} source={require('../assets/sluchawka2.png')} />
                        <Text style={[styles.telefon, {fontWeight: 'bold'}]}>815 653 239</Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <ButtonData title={"About"} icon={require('../assets/o_mnie.png')} description={"Lorem ipsum dolor sit amet dolor sit amet lorem ipsum dolor sit amet"} />
                    <ButtonData title={"Adress"} icon={require('../assets/535239.png')} 
                    description={
`Ul. Jana Pawła II 
Kraków 
37-300 Kraków
`}/>
                    <ButtonData title={"My animals"} icon={require('../assets/3699370-200.png')} description={
                        <View style={{width: '100%'}}>
                           <View style={styles.animalBlock}>
                                <Text style={{fontSize: 20}}>{"Dog - Lusia"}</Text>
                            </View> 
                            <View style={styles.animalBlock}>
                                <Text style={{fontSize: 20}}>{"Cat - Łatek"}</Text>
                            </View> 
                        </View>
                    }  />
                </View>
            </View>   
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    emaila:{
        margin: 10,
    },
    telefon:{
        margin: 10
    },
    buttonHolder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    animalBlock:{
        padding: 10,
        fontSize: 20,
        width: '100%'
    },
    img: {
        height: 25,
        width: 25
    },
    dane: {
        margin: 10
    },
    icon:{
        height: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 3
    },
    mail:{
        width: 30,
        height: 25
    },
    sluchawka:{
        width: 40,
        height: 40
    },
    mail2:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    dataHolder:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrow: {
        position: 'absolute',
        zIndex: 20,
        top: 20,
        left: 10
    },
    container: {
        width: '100%',
        height: 300,
        overflow: 'hidden'
    },
    pani: {
        width: '100%'
    },
    daneText: {
        fontSize: 30,
        fontWeight: '800'
    }
})