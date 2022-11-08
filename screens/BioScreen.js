import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, RadioButton } from 'react-native-paper';

export default function BioScreen() {
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Amerika', value: 'Amerika' },
        { label: 'Jepang', value: 'Jepang' },
        { label: 'Eropa', value: 'Eropa' },
        { label: 'Arab', value: 'Arab' }
    ]);
    const [value2, setValue2] = useState(null);
    const [checked, setChecked] = useState('');

    const navigation = useNavigation()

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleSave = () => {
        if (fullName !== '' && value !== '' && checked !== '') {
            navigation.navigate("Show", {
                nama: fullName,
                jeniskelamin: checked,
                kewarganegaraan: value,
                image: image
            });
        }
        else {
            alert('Please fill all the fields.');
        }
    }

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView style={{ backgroundColor: 'lightblue' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Data Diri</Text>
                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Nama</Text>
                    <TextInput
                        placeholder="Masukkan Nama"
                        value={fullName}
                        onChangeText={text => setFullName(text)}
                        style={styles.input}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Jenis Kelamin</Text>
                    <View style={{ width: 300, height: 50, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ width: 150, height: 50, marginRight: 10, flexDirection: 'row' }}>
                            <RadioButton
                                value="Laki-laki"
                                status={checked === 'Laki-laki' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Laki-laki')}
                            />
                            <Text style={{ marginTop: 8 }}>Laki-laki</Text>
                        </View>
                        <View style={{ width: 150, height: 50, marginRight: 10, flexDirection: 'row' }}>
                            <RadioButton
                                value="Perempuan"
                                status={checked === 'Perempuan' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Perempuan')}
                            />
                            <Text style={{ marginTop: 8 }}>Perempuan</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Kewarganegaraan</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={[styles.input, { marginBottom: 30 }]}
                        placeholder='Masukkan Kewarganegaraan'
                    />
                </View>
                {image &&
                    <Card.Cover source={{ uri: image }} style={{ margin: 20, width: 200, height: 200 }} />
                }
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={[styles.button, { width: 100, marginTop: 20, backgroundColor: 'red' }]}
                    >
                        <Text style={styles.buttonText}>Keluar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={[styles.button, { width: 100, marginTop: 20, backgroundColor: 'green' }]}
                    >
                        <Text style={styles.buttonText}>Pick Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSave}
                        style={[styles.button, { width: 100, marginTop: 20 }]}
                    >
                        <Text style={styles.buttonText}>Simpan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}

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
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonimage: {
        backgroundColor: '#0782F9',
        width: '60%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    title: {
        fontSize: 18,
        // marginBottom: 20,
        textAlign: 'center',
        // fontFamily: 'sans-serif-bold',
    },
})