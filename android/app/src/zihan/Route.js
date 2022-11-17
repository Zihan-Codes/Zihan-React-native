import React, { Component, useState } from "react";
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';

import getDirections from "react-native-google-maps-directions";
import axios from 'axios';
//import car4 from '../assets/car4.jpeg';
import bg3 from '../assets/bg3.jpeg';


class Route extends Component{
  

  constructor(props) {
    super(props);
    this.state = {
        
        pkup: '',
        pkout: '',
        vehicle: ''
      
       
    };
}

  method(){
    console.log(this.state.pkup);
    console.log(this.state.vehicle);
    this.props.navigation.navigate('Method', {pkup:this.state.pkup, pkout:this.state.pkout, vehicle: this.state.vehicle});
  }
   

    componentDidMount(){
        this.myfunction2();
    }
    myfunction2(){
      const pkup = this.props.route.params.pkup;
      const pkout = this.props.route.params.pkout;
      const vehicle = this.props.route.params.vehicle;
      console.log("...."+vehicle);

      this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});

      console.log(this.state.pkup);

      this.handleGetDirections();
    }

    
    handleGetDirections = () => {
      

        
        const data = {
          source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "dir_action",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
          waypoints: [
            {
              latitude: -33.8600025,
              longitude: 18.697452
              },
              {
                latitude: -33.8600026,
                longitude: 18.697453
              },
                 {
                latitude: -33.8600036,
                longitude: 18.697493
              }
          ]
        }
     
        getDirections(data)
      }


    render()
    {
        return(
            <View>
                <ImageBackground source={bg3} resizeMode="cover" style={styles.img}>
                <View style={styles.btn}><Button onPress={()=>this.method()} title="Trip Finished"/></View>
                </ImageBackground>

            </View>
        );
    }
}

const styles =  StyleSheet.create({
    btn: {
      width: 150,
      marginLeft: 100,
      marginTop: 180
    },
    img: {
      height: 550
    }
});

export default Route;