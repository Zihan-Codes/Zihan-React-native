import React, { Component } from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg4 from '../assets/bg4.jpeg';

class Method extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
            pkup: '',
            pkout: '',
            vehicle: ''
          
           
        };
    }

    paynow(){
        this.props.navigation.navigate('cash');
    }
    paylater(){
        const pkup = this.props.route.params.pkup;
        const pkout = this.props.route.params.pkout;
        const vehicle = this.props.route.params.vehicle;

        console.log(vehicle);

      //  this.setState({pkup: pkup, pkout: pkout});

        this.props.navigation.navigate('Pay2',{pkup:pkup, pkout:pkout, vehicle: vehicle});
    }
    render(){
        return(
            <View>
                <ImageBackground source={bg4} resizeMode="cover" style={styles.img}>
                <Text style={styles.txt}>Choose your payment method</Text>
                <View style={styles.btn1}><Button onPress={()=>this.paynow()} title="Paynow"/></View>
                <View style={styles.btn1}><Button onPress={()=>this.paylater()} title="Pay Later"/></View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 100,
        marginTop: 50

    },
    btn1: {
        width: 100,
        marginBottom: 60,
        marginLeft: 100
    },
    btn2: {
        width: 100
    },
    img: {
        height: 550
    }
});

export default Method;