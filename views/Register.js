import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native';

export const Register = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>GWIZD</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity>
            <Text style={[styles.reg, styles.active]}>{"Register"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
              <Text style={styles.reg}>{"Login"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
        <TextInput 
          style={styles.input}
          placeholder='E-mail adress'
        />
        <TextInput style={styles.input} placeholder='Phone number' />
        <TextInput style={styles.input} placeholder='Password' />
        <TextInput style={styles.input} placeholder='Repeat password' />
        <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.registration}><Text style={styles.registration_text}>Register</Text></TouchableOpacity></View>
      </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center', 
    },
    logo: {
      marginTop: 50,
      alignItems: 'center',
    },
    title: {
      padding: 30,
      fontSize: 40,
      color: '#000',
    },
    active:{
        backgroundColor: 'orange',
        color: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    reg: {
      fontSize: 24,
      paddingBottom: 10,
      borderBottomColor: 'orange',
      borderBottomWidth: 2,
      padding: 10
    },
    input: {
      marginLeft: 30,
      marginRight: 30,
      fontSize: 18,
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: 'orange',
    },
    registration: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      backgroundColor: '#fa0000',
      width: '80%',
      height: 45,
      borderRadius: 10,
      elevation: 5,
    },
    registration_text: {
      fontSize: 25,
      color: '#fff',
    }
  });