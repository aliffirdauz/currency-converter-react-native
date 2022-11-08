import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react'
import CustomListview from '../components/CustomList'

export default class HomeScreen extends Component {
    getData() {
        return [
            {
                key: 1,
                title: 'Rupiah',
                description: 'Rupiah Indonesia atau Rupiah adalah mata uang resmi yang berlaku di wilayah Republik Indonesia. Mata uang ini dicetak dan diatur penggunaannya oleh Bank Indonesia dengan kode ISO 4217 IDR. Secara tidak formal, orang Indonesia juga menyebut mata uang ini dengan nama "perak". ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/33/33019.png',
            },
            {
                key: 2,
                title: 'Dollar',
                description: 'Dolar adalah nama mata uang resmi di beberapa negara, tanah jajahan, dan daerah lain. Biasanya dolar dilambangkan dengan simbol $.',
                image_url: 'https://cdn-icons-png.flaticon.com/512/74/74742.png',
            },
            {
                key: 3,
                title: 'Yen',
                description: 'Yen adalah mata uang Jepang. Simbol: ¥; atau dalam bahasa Jepang: en. Yen adalah mata uang ketiga yang paling banyak diperdagangkan di pasar valuta asing, setelah dolar Amerika Serikat dan Euro. Yen ini juga banyak digunakan sebagai mata uang cadangan ketiga setelah dolar AS dan euro.',
                image_url: 'https://cdn-icons-png.flaticon.com/512/25/25188.png',
            },
            {
                key: 4,
                title: 'Euro',
                description: 'Euro (Kurs: €, Kode: EUR) adalah mata uang yang dipakai di 19 negara anggota Uni Eropa. Secara giral, mata uang ini mulai dipakai sejak tanggal 1 Januari 1999, tetapi secara fisik baru dipakai pada tanggal 1 Januari 2002. ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/798/798045.png',
            },
            {
                key: 5,
                title: 'Dirham',
                description: 'Dirham or dirhem or "Dirhm" merupakan satuan mata uang pada beberapa negara Arab, juga Tajikistan, dan dulunya, terkait dengan satuan massa pada Kekaisaran Utsmaniyah dan Persia. Nama ini diturunkan dari mata uang Yunani, drachma, atau didrachm.',
                image_url: 'https://cdn-icons-png.flaticon.com/512/7370/7370240.png',
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomListview
                    itemList={this.getData()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    }
});