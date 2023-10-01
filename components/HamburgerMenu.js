import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import {Ionicons, FontAwesome5} from 'react-native-vector-icons'

const styles = StyleSheet.create({
    menu: {
        height: '100%',
        backgroundColor: 'white',
    },
    image: {
        height: 30,
        width: 30,
        margin: 20,
        marginTop: 40
    },
    flexBox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inner: {
        width: '60%',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    list: {
        fontSize: 20,
        color: 'red',
    },
    flexUnderscore: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 10
    },
    option: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10
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
      fontSize: 20,
      color: '#fff',
    },
    change: {
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        fontSize: 17
    }
})

export const HamburgerMenu = () => {
    const navigation = useNavigation()
    const [shouldShow, setShouldShow] = useState(false)

    return (
        <View style={styles.menu}>
            <View style={styles.flex}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Menu');}}>
                        <Text style={[styles.title, { marginBottom: 10, marginLeft: '40%', color: 'red' }]}>Main</Text>
                    </TouchableOpacity>
                    <Text style={[styles.title, { marginBottom: 10 }]}>{"Animals"}</Text>
                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                        <View style={styles.flexUnderscore}>
                            <Text style={styles.change}>{"Available shelters  "}</Text>
                            {
                                shouldShow ? (
                                    <FontAwesome5 name="minus" size={20} color="red"/>
                                ) : <FontAwesome5 name="plus" size={20} color="red"/>
                            }
                        </View>
                    </TouchableOpacity>
                    {
                        shouldShow ? (
                            <>
                                <TouchableOpacity><Text style={styles.option}>{"Private"}</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.option}>{"Public"}</Text></TouchableOpacity>
                            </>
                        ) : null
                    }
                    <TouchableOpacity onPress={() => {navigation.navigate('Wet');}}><Text style={styles.change}>{"Veterinary medicines"}</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.change}>{"Dotation"}</Text></TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, marginTop: 50, backgroundColor: 'gray' }}></View>
                    <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>{"Settings"}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}><Text style={styles.change}>{"My Account"}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Settings") }}><Text style={styles.change}>{"Settings"}</Text></TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, marginTop: 50, backgroundColor: 'gray' }}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity style={styles.login} onPress={() => {navigation.navigate('Found');}}><Text style={styles.login_text}>Report animal</Text></TouchableOpacity></View>
                </View>
            </View>
        </View>
    )
}
