import React, { Component } from "react";
import { Button, Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const image = { uri: "https://www.marketing91.com/wp-content/uploads/2019/08/Payment-using-Cash.jpg" };

class Cash extends Component{

    payment(){
        console.log("move to payment page");
        this.props.navigation.navigate('Payment');
    }
    request(){
        console.log("move to requesting page");
        this.props.navigation.navigate('Request');
       

    }
    history(){
        console.log("move to History page");
        this.props.navigation.navigate('history');
    }
    render(){
        return(
            <View style={styles.header}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        justifyContent: "center",
        height: 350,
        marginTop: 70,
        
      },
      btn1 : {
        backgroundColor: '#33adff',
        borderRadius: 15,
        textAlign: "center",
        height: 30,
        width: 100,
        marginLeft: 100,
        marginBottom: 20,
        marginTop: 100
      //  marginTop: -40
      },
      btn2 : {
        backgroundColor: '#33adff',
        borderRadius: 15,
        textAlign: "center",
        height: 30,
        width: 100,
        marginLeft: 100,
        marginBottom: 20
      },
      btn3 : {
        backgroundColor: '#33adff',
        borderRadius: 15,
        textAlign: "center",
        height: 30,
        width: 180,
        marginLeft: 70
        
      },
      btntxt: {
        fontSize: 18,
        textAlign: "center",
        color: "white"
      },
      header: {
        
        backgroundColor: "#79a6d2",
        height: 550
       
    }
      
});

export default Cash;