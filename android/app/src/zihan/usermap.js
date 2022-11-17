import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import getDirections from "react-native-google-maps-directions";

class Umap extends Component{

    move = () => {
        this.props.navigation.navigate('Request');
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
           key: "travelmode",
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
                <Text style={styles.p1}>
                  Waiting untill driver accept
                </Text>
                <View style={styles.btn1}>
                    <Button onPress={this.handleGetDirections} title='Driver Accepting' />
                </View>
                <View style={styles.btn2}>
                    <Button onPress={this.move} title='No Response' />
                </View>

            </View>
        );
    }
}

const styles =  StyleSheet.create({
    p1: {
        color: 'black',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 20,
    },

    btn1: {
        width: 250,
        marginTop: 40,
        marginLeft: 15,
    },
    btn2: {
        width: 200,
        marginTop: 30,
        marginLeft: 25,
    }
});

export default Umap;