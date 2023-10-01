import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Button, Image, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from './tabs';
import UnderlinedInput from './underline';
import PasswordInput from './password';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const LoginView = ({ navigation }) => 
    <View style={styles.logreg}>
        <Text>E-mail adress</Text>
        <UnderlinedInput placeholder="E-mail adress"/>
        <Text>Passoword</Text>
        <PasswordInput placeholder="Enter your password"/>
        <View style={styles.passres}>
            <TouchableOpacity>
                <Text style={styles.bluetext}>I forget my password</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('Menu');}} style={styles.button}>
            <Text style={styles.logintext}>Log in</Text>
        </TouchableOpacity>
    </View>
;
const RegistrationView = ({ navigation })  => 
    <View style={styles.logreg}>
        <Text>E-mail adress</Text>
        <UnderlinedInput placeholder="E-mail adress"/>
        <Text>Phone number</Text>
        <UnderlinedInput placeholder="Enter your phone number"/>
        <Text>Enter your password</Text>
        <PasswordInput placeholder="Enter your password"/>
        <Text>Confirm password</Text>
        <PasswordInput placeholder="Enter your password"/>
        <TouchableOpacity onPress={() => {navigation.navigate('Menu');}} style={styles.button}>
            <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>
    </View>
;

const Login_screen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('Login'); // domyślna zakładka
    const handleTabSelect = (tabName) => {
      setSelectedTab(tabName);
    }
    const renderTabContent = () => {
        switch (selectedTab) {
          case 'Login':
            return <LoginView navigation={navigation}/>;
          case 'Registration':
            return <RegistrationView navigation={navigation}/>;
        }
      }
    return (
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={true}>
        <SafeAreaView style={styles.login_screen_contairner}>  
        <Image style={styles.logo} source={{uri: 'https://i.imgur.com/1yskRmX.png',}}/>
        <TabBar style={styles.tabs} onTabSelect={handleTabSelect}  activeTab={selectedTab}  />
        {renderTabContent()}
        </SafeAreaView>
    </KeyboardAwareScrollView>
    );
  };

  const styles = StyleSheet.create({
    login_screen_contairner: {
      flex: 1,
      width: '100%',
      alignItems: 'center'
    }, image: {
        width: 375,
        height: 211
    }, logo: {
        width: 210,
        height: 175,
        marginTop: '35%',
        resizeMode: 'stretch'
    }, tabs: {
        width: '90%',
        height: '30%',
    }, logreg: {
        width: '85%',
        height: 'auto',
        flexDirection: 'column',
    }, passres: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    }, bluetext: {
        color: '#086AD8'
    }, button: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa800', 
        borderRadius: 10
    }, logintext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }, 
  });
  
  export default Login_screen;
//   navigation.navigate('Login Screen');