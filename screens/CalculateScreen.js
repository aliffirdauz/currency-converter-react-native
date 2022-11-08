import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CalculateScreen = () => {
    const [rupiah, setRupiah] = useState('')
    const [dollar, setDollar] = useState('')
    const [yen, setYen] = useState('')
    const [euro, setEuro] = useState('')
    const [dirham, setDirham] = useState('')

    const conDollar = () => {
        var local = 0.000064 * rupiah
        rupiah === '' ? alert('Please enter a value') : setDollar(local.toString())
    }

    const conEuro = () => {
        var local = 0.00000065 * rupiah
        rupiah === '' ? alert('Please enter a value') : setEuro(local.toString())
    }

    const conYen = () => {
        var local = 0.0093 * rupiah
        rupiah === '' ? alert('Please enter a value') : setYen(local.toString())
    }

    const conDirham = () => {
        var local = 0.00023 * rupiah
        rupiah === '' ? alert('Please enter a value') : setDirham(local.toString())
    }

    return (
        <ScrollView style={{backgroundColor:'lightblue'}}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Masukkan jumlah uang dalam Rupiah</Text>
                    <TextInput
                        placeholder="Input rupiah"
                        value={rupiah}
                        onChangeText={text => setRupiah(text)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={conDollar}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Konversi Ke Dollar</Text>
                        </TouchableOpacity>
                        {dollar !== '' && (
                            <Text style={styles.hasil}>{dollar} dollar</Text>
                        )}
                        <TouchableOpacity
                            onPress={conYen}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Konversi Ke Yen</Text>
                        </TouchableOpacity>
                        {yen !== '' && (
                            <Text style={styles.hasil}>{yen} yen</Text>
                        )}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={conEuro}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Konversi Ke Euro</Text>
                        </TouchableOpacity>
                        {euro !== '' && (
                            <Text style={styles.hasil}>{euro} euro</Text>
                        )}
                        <TouchableOpacity
                            onPress={conDirham}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Konversi Ke Dirham</Text>
                        </TouchableOpacity>
                        {dirham !== '' && (
                            <Text style={styles.hasil}>{dirham} dirham</Text>
                        )}
                    </View>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default CalculateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 105,
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    hasil: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    title: {
        fontSize: 36,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
})