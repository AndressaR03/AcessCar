import React, {Component, createRef, Fragment, useContext, useState, useEffect, useRef} from 'react';
import {View, Image, Modal, Text} from 'react-native';
import MapView, { MapViewProps } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { StyleSheet } from 'react-native';
import backImage from '../../img/back.png';
import {getPixelSize } from "../utils";
import "../../image.ts";
import {Platform } from 'react-native';
import Search from '../Search';
import markerImage from "../../img/marker.png";
import Directions from "../Directions";
import Details from "../Details";
import VoiceComand from "../Voice";
import { VoiceContext} from '../../context/Voice';

import { 
    Back,
    LocationBox, 
    LocationText,
    LocationTimeText,
    LocationTimeTextSmall,
    LocationTimeBox,
    VoiceButton,
    ModalDetails
  } from './styles';


interface Props {
  onSearch?: onSearch
};
  
interface onSearch {
  onSearch?:string
};

export default function Map (props:Props){

  const [mapRegion, setmapRegion] = useState<any>(null);
  const [destination, setdestination] = useState<any>(null);
  const [location, setlocation] = useState<any>(null);
  const [hasLocationPermissions, sethasLocationPermissions] = useState(false);
  const [duration, setduration] = useState<any>(null);
  const [locationResult, setlocationResult] = useState<any>();
  const [distance, setdistance] = useState(null);
  const [isVisibleVoice, setisVisibleVoice] = useState(false);
  const [isVisibleDetails, setisVisibleDetails] = useState(false);
  const [searchvoice, setsearchvoice] = useState(null);
 

  const useVoice = useContext(VoiceContext);

  useEffect(() => {
    const Load = async () => {
      const getLocation = await _getLocationAsync();
    }
    Load();
  }, []);
 
  function _handleMapRegionChange (mapRegion:any) {
    console.log(mapRegion);
    setmapRegion(mapRegion)
  };    
    
  async function _attemptReverseGeocodeAsync (coords:any){
        try {
          let result = await Location.reverseGeocodeAsync(coords);
          return result;
        } catch (e) {
          return e;
        }
      };
    
  async function _getLocationAsync() {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
       if (status !== 'granted') {
         setlocationResult('Permission to access location was denied');
       } else {
         sethasLocationPermissions(true);
       }
    
       let location = await Location.getCurrentPositionAsync({});
       setlocationResult({locationResult: JSON.stringify(location)});
       
       const coords = {latitude: location.coords.latitude, longitude: location.coords.longitude }
       _attemptReverseGeocodeAsync(coords).then(result => {
        const adress = result[0].street;
    
        setlocation(adress)
      })
    
       // Center the map on the location we just fetched.
         setmapRegion({latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
      };
    
      function handlelocationSelected(data:any, { geometry }:any){
        const { location: {lat: latitude, lng: longitude} } = geometry;
        setdestination({latitude: latitude, longitude: longitude, title: data.structured_formatting.main_text,})
        setisVisibleDetails(true)
      }
    
      function handleBack( ){
        setdestination(null)
        useVoice.setSearch('');
      }

      function handleVoiceSearch(result:any){
       console.log(result);
      };

      const mapStyle = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]

        const mapViewRef = React.useRef()  as React.MutableRefObject<MapView>;;
        const {search_voice} = useContext(VoiceContext);
        //const { mapRegion, destination, duration, location, distance} = this.state;
        
        return(
            <>
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1 }}
                    region={mapRegion}
                    ref={mapViewRef}
                    customMapStyle={mapStyle}
                    showsUserLocation
                    loadingEnabled
                >
                { destination && ( 
            <Fragment>
              <Directions
                origin={mapRegion}
                destination={destination}
                onReady={(result: any) => {
                  setduration(Math.floor(result.duration))
                  setdistance(result.distance);
                  console.log(result)
                  mapViewRef.current?.fitToCoordinates(result.coordinates, {
                   edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(50),
                      bottom: getPixelSize(350)
                    }
                  });
                }}
                />
                <Marker
                  coordinate={destination}
                  anchor={{x: 0, y:0}}
                  image={markerImage}
                >
                  <LocationBox>
                    <LocationText>{destination.title}</LocationText>
                  </LocationBox>
                </Marker>
                <Marker
                  coordinate={mapRegion}
                  anchor={{x: 0, y:0}}
                >
                  <LocationBox>
                    <LocationTimeBox>
                      <LocationTimeText>{duration}</LocationTimeText>
                      <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                    </LocationTimeBox>
                    <LocationText>{location}</LocationText>
                  </LocationBox>
                </Marker>
                
              </Fragment>
           ) }  
          </MapView>

          {destination ? (
            <Fragment>
              <ModalDetails 
              animationType={'slide'} 
              transparent={true}
              visible={isVisibleDetails}
              onRequestClose={() => {
              setdestination(null);
              useVoice.setSearch("");
              }}>
              <Back onPress={handleBack}>
                <Image source={backImage} />
              </Back>
              <Details
              distance = {distance}
              duration = {duration} />
              </ModalDetails>
            </Fragment>
          ) : (
            <>
            <Search onLocationSelected = {handlelocationSelected} />
            <VoiceButton onPress = {() => setisVisibleVoice(true)}>
              <Image style={{width: 50, height: 50}} source={require('../../img/voice.png')} />
            </VoiceButton>
            </>
            )} 
            <Modal
            animationType={'slide'} 
            transparent={false}
            visible={isVisibleVoice}
            onRequestClose={() => {
            setisVisibleVoice(false);
            }}
            >
            <VoiceComand></VoiceComand>
            <VoiceButton onPress = {() => {setisVisibleVoice(false)}}><Text>Fechar</Text></VoiceButton>
            </Modal>
            </View>
            </>
        );
    }