import { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
const styles = StyleSheet.create({
    menu:{
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
    inner:{
        width: '60%',
    },
    flex:{
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    list:{
        fontSize: 20,
        color: 'red',
    },
    flexUnderscore: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option:{
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10
    },
    change:{
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        
    }
})
export const HamburgerMenu = () => {

    const [shouldShow, setshouldShow] = useState(true)

    return(

        <View style={styles.menu}>

            <View style={styles.flex}>

            
            <View style={styles.inner}>
                <Text style={[styles.title, {marginBottom: 10}]}>{"Schroniska"}</Text>
                <TouchableOpacity onPress={() => setshouldShow(!shouldShow)}>
                <View style={styles.flexUnderscore}>
                    <Text style={styles.list}>{"Dostępne schroniska"}</Text>
                    {
                        shouldShow ? (
                            <Image source={require('../assets/arrowdown.png')} style={{width: 20, height: 20}} />
                        ) : <Image source={require('../assets/arrowleft.png')} style={{width: 20, height: 20}} />
                    }
                </View>
                </TouchableOpacity>
                {
                    shouldShow ? (
                        <>
                         <Text style={styles.option}>{"prywatne"}</Text>
                         <Text style={styles.option}>{"państwowe"}</Text>
                        </>
                       
                    ) : null
                }
                <View style={{borderBottomWidth: 1, marginTop: 50, backgroundColor: 'gray'}}></View>
                <Text style={[styles.title, {marginBottom: 10, marginTop: 20}]}>{"Ustawienia"}</Text>
               <TouchableOpacity><Text style={styles.change}>{"Panel"}</Text></TouchableOpacity> 
                <Text style={styles.change}>{"Moje lecznice"}</Text>
                <Text style={styles.change}>{"Moje zwierzaki"}</Text>
                <Text style={styles.change}>{"Moje konto"}</Text>
                <Text style={styles.change}>{"Mój bilans"}</Text>
                <Text style={styles.change}>{"Ustawienia"}</Text>
                <Text style={styles.change}>{"Pomoc"}</Text>
                <View style={{borderBottomWidth: 1, marginTop: 50, backgroundColor: 'gray'}}></View>
               
            </View>

            </View>
        </View>
    )
}