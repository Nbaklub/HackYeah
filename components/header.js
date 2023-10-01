import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { HamburgerMenu } from "./HamburgerMenu"
import { useState } from "react"



const styles = StyleSheet.create({
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
    }
})


export const HeaderComponent = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return(
        <>
            <View style={styles.flexBox}>
                <TouchableOpacity onPress={() => {
                    setToggleMenu(!toggleMenu)
                }}>
                    {toggleMenu ? 
                    (
                        <Image style={styles.image} source={require('../assets/x.png')}/>
                    ):<Image style={styles.image} source={require('../assets/hamburger.png')}/>
                    }

                </TouchableOpacity>

                <Image style={styles.image} source={require('../assets/logo.png') } />
                <View style={styles.image}></View>
            </View>
            {
                toggleMenu ? (
                    <HamburgerMenu />
                ) : null
            }
        </>
    )
}