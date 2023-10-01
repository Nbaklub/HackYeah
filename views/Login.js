import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center', 
    },
    reg: {
        fontSize: 24,
        paddingBottom: 10,
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10
      },

      active:{
        backgroundColor: 'orange',
        color: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
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
    log: {
      fontSize: 24,
      paddingBottom: 10,
      borderBottomColor: 'orange',
      borderBottomWidth: 2,
    },
    input: {
      marginLeft: 30,
      marginRight: 30,
      fontSize: 18,
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: 'orange',
    },
    login: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: '#fa0000',
      width: '80%',
      height: 45,
      borderRadius: 10,
      elevation: 5,
    },
    login_text: {
      fontSize: 25,
      color: '#fff',
    },
    lose_text :{
      textAlign: 'right',
      fontSize: 16,
      color: '#eba059',
      marginRight: 30,
      marginTop: 15,
    },
  });

export const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.title}>GWIZD</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                    <Text style={[styles.reg]}>{"Register"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Text style={[styles.reg, styles.active]}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
          <TextInput 
            style={styles.input}
            placeholder='Adress e-mail'
          />
          <TextInput style={styles.input} placeholder='Password' />
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <TouchableOpacity onPress={() => {navigation.navigate('First')}} style={styles.lose}><Text style={styles.lose_text}>I forgot my password</Text></TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity  onPress={() => {navigation.navigate('First')}} style={styles.login}><Text style={styles.login_text}>Login</Text></TouchableOpacity></View>
        </View>
        </SafeAreaView>
      ); 
}

