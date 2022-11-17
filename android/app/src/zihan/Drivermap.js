import React, { Component, useState } from "react";
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';

import getDirections from "react-native-google-maps-directions";
import axios from 'axios';
import car3 from '../assets/car3.jpg';


class Dmap extends Component{

  constructor(props) {
    super(props);
    this.state = {
      id: "",
        name: "",
        slocation: "",
        elocation: "",
        mobile: "",
        isFetching: false,
        data: []
    };
}

   

   save(){
    const name = this.props.route.params.name;
    const slocation = this.props.route.params.slocation;
    const elocation = this.props.route.params.elocation;
    const phone = this.props.route.params.phone;
    const id = this.props.route.params.id;
    console.log(id);

    axios.delete('http://10.0.2.2:8000/api/delete/ongoing/'+id)
       .then(() => this.setState({ status: 'Delete from Ongoing order table successfully' }));

    axios.post('http://10.0.2.2:8000/api/add/complete', {name:name, slocation:slocation, elocation:elocation, mobile:phone}).then(res => console.log(res.data));

    this.props.navigation.navigate('dhome');
   }

   componentDidMount(){
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
               
                

                <ImageBackground source={car3} resizeMode="cover" style={styles.bg}>
                <View style={styles.btn3}>
                  {/* <Text style={styles.p2}>If the trip was finish</Text> */}
                   <Button
                   onPress={()=>this.save()}
                   title='Trip Finished'
                    />
                </View>
                </ImageBackground>

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
    },
    btn3: {
      width: 200,
      marginTop: 80,
      marginLeft: 60

    },
    p2: {
      color: 'black',
      fontSize: 20,
      marginBottom: 20
    },
    bg: {
      height: 550
    }
});

export default Dmap;