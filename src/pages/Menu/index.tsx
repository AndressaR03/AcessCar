import React, {Component ,useRef, useState, useEffect } from 'react';
import {View, Dimensions, StyleSheet, Platform, Text, Image, ImageBackground, SafeAreaView, InteractionManager} from "react-native";
import 'react-native-gesture-handler';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import voice from '../../images/voice.png';
import '../../image.ts';
import createAppContainer from '../../routes/AppPageRoutes'
import { NavigationContainer } from '@react-navigation/native';
const { width: screenWidth } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';

function Menu(){

    const {navigate} = useNavigation();

    const state = {
        entries: [
        {
            title: "Mapa",
            page:"Localizacao"
        },
        {
            title: "Pagamento",
            page: "Cartao"
        },
        {
            title: "Viagem",
            page: "Viagem",
        }]
    }

    function _renderItem ({item}:any){
       
        return(
            <View style={styles.item}>
                <TouchableOpacity style={styles.box} onPress={() => {navigate(item.page)}}>
                    <Text style={styles.title} >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );

    } return(
        <>
            <View style={styles.container}>
                <Text style={styles.menu}>Menu</Text>
                <Carousel
                sliderHeight={400}
                sliderWidth={400}
                itemWidth={400}
                data={state.entries}
                renderItem={_renderItem}
                />
            </View>
            </>
    );
} 


const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#1C1C1C',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40 
    },
    item:{
        width: 300,
        height: 400,
        alignSelf: "center",
        backgroundColor: "#19cdce",
        top:40,
        borderRadius: 8 
    },
    title:{
        fontSize: 42,
        color: "#000",
        alignSelf: 'center',
        paddingTop: 320
    },
    box: {
        width: 300,
        height: 400,
        backgroundColor:'#19cdce',
        borderWidth: 2,
        borderRadius: 8,
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'space-between'
    },
    menu:{
        fontSize: 42,
        color: "#19cdce",

    },

});

export default Menu;