import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


const RenderInfo = ({ item, index }) => {
    const [infoShow, setinfodShow] = useState(false);
    const [historyShow, sethistoryShow] = useState(false);
    const [sizeShow, setsizeShow] = useState(false);
    const [ubarwienieShow, setubarwienieShow] = useState(false);
    const [charakterShow, setcharakterShow] = useState(false);
    const [zdrowieShow, setzdrowieShow] = useState(false);
    const [cenaShow, setcenaShow] = useState(false);
    const [ciekawostkiShow, setciekawostkiShow] = useState(false);

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://i.imgur.com/URiCdv0.png' }} style={{ width: '100%', height: 300, resizeMode: 'stretch' }} />
                    <Image source={{ uri: item.url }} style={{ width: '100%', height: 300, resizeMode: 'contain', position: 'absolute', zIndex: 1 }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>{item.Name}</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setinfodShow(!infoShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Opis</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {infoShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Opis}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => sethistoryShow(!historyShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Historia</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {historyShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Historia}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setsizeShow(!sizeShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Wielkość</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {sizeShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Wielkosc_kleb}</Text>
                            <Text style={styles.option}>{item.Waga}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setubarwienieShow(!ubarwienieShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Ubarwienie</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {ubarwienieShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Masc}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setcharakterShow(!charakterShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Charakter</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {charakterShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Chartakter}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setzdrowieShow(!zdrowieShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Zdrowie</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {zdrowieShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Zdrowie}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setcenaShow(!cenaShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Cena</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {cenaShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Cena}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setciekawostkiShow(!ciekawostkiShow)}>
                            <View style={styles.flexUnderscore}>
                                <Text>Ciekawostki</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {ciekawostkiShow ? (
                        <View style={styles.view}>
                            <Text style={styles.option}>{item.Ciekawostki}</Text>
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const boe = ({ navigation }) => {
    return(
        <View>
        {boe.map((item, index) => (
            <RenderInfo key={index} item={item} index={index} />
        ))}
        </View>  
    );
}
const styles = StyleSheet.create({
    flexUnderscore: {
        width: 200,
        height: 35,
        borderRadius: 30,
        backgroundColor:'#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },      list:{
        fontSize: 20,
        paddingRight: 5,
    },    option:{
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5
    }, view: { 
        zIndex: 1,
        borderWidth: 2, 
        borderColor: 'gray', 
        borderRadius: 20, 
        width: '90%', 
        backgroundColor: '#D7D7D7', 
        margin:5,
        paddingBottom: 5
    },
});
export default boe;