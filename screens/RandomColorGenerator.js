import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, FlatList, Clipboard } from 'react-native'
import { useState } from 'react'

const RandomColorGenerator = () => {
    const [newColor, setNewColor] = useState([]);
    const generateColor = () => {
        const blue = Math.floor(Math.random() * 256);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <StatusBar animated={true} />
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                    setNewColor([...newColor, generateColor()]);
                }}>
                <Text>Generate New Color</Text>
            </TouchableOpacity>
            <FlatList
                data={newColor}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.textView}>
                            <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={() => Clipboard.setString(item)}>
                                <View style={{
                                    backgroundColor: item,
                                    width: '80%',
                                    height: 80,
                                    borderRadius: 6,
                                    marginTop: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(key) => key}
            />
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                    setNewColor([]);
                }}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'cyan',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default RandomColorGenerator;
