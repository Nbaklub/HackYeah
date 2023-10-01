import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
const styles = StyleSheet.create({
    buttonHolder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    img: {
        height: 25,
        width: 25
    },
    desctiption: {
        fontSize: 18
    }
})

export const ButtonData = ({icon, title, description}) => {
    const [showDesc, setShowDesc] = useState(false)

    return(
        <TouchableOpacity onPress={() => setShowDesc(!showDesc)}>
            <View style={styles.buttonHolder}>
                <Image style={styles.img} source={icon}></Image>
                <Text>{title}</Text>
                {showDesc ? (
                    <Image style={styles.img} source={require('../assets/arrowdown.png')}></Image>
                ): <Image style={styles.img} source={require('../assets/arrow_left.png')}></Image>
                }
                
            </View>
            {
                showDesc ? (
                    <View style={{padding: 10}}>
                        <Text style={styles.desctiption}>{description}</Text>
                    </View>
                ) : null
            }
        </TouchableOpacity>
    )
}