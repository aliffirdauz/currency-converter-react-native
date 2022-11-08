import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const ShowScreen = ({ route }) => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView style={{backgroundColor:'lightblue'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Card.Cover source={{ uri: route.params.image }} style={{ margin: 20, width: 200, height: 200 }} />
                <Text style={styles.teks}>Name : {route.params.nama}</Text>
                <Text style={styles.teks}>Jenis Kelamin : {route.params.jeniskelamin}</Text>
                <Text style={styles.teks}>Kewarganegaraan : {route.params.kewarganegaraan}</Text>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={[styles.button, { width: 100, marginTop: 20, backgroundColor: 'red' }]}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    teks: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    }
})