import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={{ height: '100%' }}>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("First") }}>
                        <Image style={styles.left} source={require('../assets/chevron-left.png')} />
                    </TouchableOpacity>
                    <View style={styles.mini_logo}>
                        <Image style={styles.mini_logo} source={require('../assets/logo.png')} />
                        <Text style={styles.middle_text}>{"Settings"}</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <TouchableOpacity ><Text style={styles.center}>{"Change Password"}</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.center}>{"Privacy"}</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.center}>{"App Terms"}</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.center}>{"Customize Appearance"}</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.center}>{"App Language"}</Text></TouchableOpacity>
                </View>
                <Image source={require('../assets/paws.png')} style={styles.paws} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    left: {
        width: 45,
        height: 45,
        marginTop: 45,
        marginLeft: 8,
        position: 'absolute',
    },
    mini_logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    middle_text: {
        fontWeight: 'bold',
        margin: 30,
        fontSize: 40,
    },
    center: {
        margin: 7,
        fontWeight: 'bold',
        marginLeft: 30,
        fontSize: 18,
    },
    space: {
        marginTop: 40,
    },
    paws: {
        position: 'absolute',
        bottom: 0,
        zIndex: -1
    }
});
