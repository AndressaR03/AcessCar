import React, {Component, createRef, Fragment} from 'react';
import {View, Image, Modal, Text} from 'react-native';
import MapView from 'react-native-maps';
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
import { useNavigation } from '@react-navigation/native';


import { 
    Back,
    LocationBox, 
    LocationText,
    LocationTimeText,
    LocationTimeTextSmall,
    LocationTimeBox,
    VoiceButton
  } from './styles';

export default class Map extends Component{
    state:any = {
        mapRegion: null,
        destination: null,
        location: null,
        hasLocationPermissions: false,
        duration: null,
        locationResult: null,
        distance: null,
        last_tap: null,
        isVisible: false,
      };
      async componentDidMount() {
        this._getLocationAsync();

      }
 
      _handleMapRegionChange = (mapRegion:any) => {
        console.log(mapRegion);
        this.setState({ mapRegion });
      };
    
      _attemptReverseGeocodeAsync = async (coords:any) => {
        try {
          let result = await Location.reverseGeocodeAsync(coords);
          return result;
        } catch (e) {
          return e;
        }
      };
    
      _getLocationAsync = async () => {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
       if (status !== 'granted') {
         this.setState({
           locationResult: 'Permission to access location was denied',
         });
       } else {
         this.setState({ hasLocationPermissions: true });
       }
    
       let location = await Location.getCurrentPositionAsync({});
       this.setState({ locationResult: JSON.stringify(location) });
       
       const coords = {latitude: location.coords.latitude, longitude: location.coords.longitude }
       this._attemptReverseGeocodeAsync(coords).then(result => {
        const adress = result[0].street;
    
        this.setState({
          location: adress
        })
      })
    
       // Center the map on the location we just fetched.
        this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
      };
    
      handlelocationSelected = (data:any, { geometry }:any) => {
        const { location: {lat: latitude, lng: longitude} } = geometry;
        this.setState({
          destination: {
            latitude: latitude,
            longitude: longitude,
            title: data.structured_formatting.main_text,
          }
        });
      }
    
      handleBack = ( ) => {
        this.setState({
          destination: null
        })
    
      }

      handleVoice =() => {
        const {navigate} = useNavigation ();
        navigate('Voice')
        console.log('Here')
      }

      mapStyle = [
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

    render(){
      
        const mapView = createRef<MapView>();
        const { mapRegion, destination, duration, location, distance} = this.state;
        
        return(
            <>
            
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1 }}
                    region={mapRegion}
                    ref={mapView}
                    customMapStyle={this.mapStyle}
                    showsUserLocation
                    loadingEnabled
                >
                { destination && ( 
            <Fragment>
              <Directions
                origin={mapRegion}
                destination={destination}
                onReady={(result: any) => {
                  this.setState({duration: Math.floor(result.duration)})
                  this.setState({distance: result.distance});
                  mapView.current?.fitToCoordinates(result.coordinates, {
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
              <Back onPress={this.handleBack}>
                <Image source={backImage} />
              </Back>
              <Details
              distance = {distance}
              duration = {duration} />
            </Fragment>
          ) : (
            <>
            <Search onLocationSelected = {this.handlelocationSelected} />
            <VoiceButton onPress = {() => this.setState({ isVisible: true })}>
              <Image style={{width: 50, height: 50}} source={require('../../img/voice.png')} />
            </VoiceButton>
            </>
            )} 
            <Modal
            animationType={'slide'} 
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
            this.setState({ isVisible: false });
            }}
            >
            <VoiceComand></VoiceComand>
            </Modal>
            </View>
            </>
        );
    }

}

