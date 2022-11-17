import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import bg from '../assets/bluebg.jpeg'

class Dhome extends Component{

    move(){
        this.props.navigation.navigate('OrderList');
    }
    logout(){
        this.props.navigation.navigate('login');
    }
    render()
    {
        return(
            <View style={styles.bg}>
                <ImageBackground source={bg} resizeMode="cover" style={styles.img}>
                    <TouchableOpacity onPress={()=>this.logout()} style={styles.logoutbtn}><Text style={styles.logoutxt}>Signout</Text></TouchableOpacity>
                <Text style={styles.headtxt}>Companion</Text>
                <Text style={styles.withtxt}>With you !</Text>
                <Text style={styles.withtxt}>For you !</Text>
                
                <View
                //   style={{
                //        borderBottomColor: 'white',
                //        borderBottomWidth: 10,
                //        marginLeft: 20,
                //        marginRight: 20,
                //        marginTop: 40,
                //        borderRadius: 10,
                //        marginBottom: 20,

                //     }}
                  />
                
                <Text style={styles.txt}>Passenger's Safety is your responsibility as a driver</Text>

                <TouchableOpacity onPress={()=>this.move()} style={styles.btn}><Text style={styles.btntxt}>Pending Orders list</Text></TouchableOpacity>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headtxt: {
        color: 'black',
        fontSize: 30,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20
    },
    withtxt: {
        color: "#800033",
        fontSize: 20,
        textAlign: "center"
    },
    txt: {
        color: "black",
        fontSize: 20,
        textAlign:"center",
        marginTop: 40,
        marginBottom: 40
    },
    btn: {
        backgroundColor: "blue",
        width: 200,
        height: 30,
        marginLeft: 50,
        borderRadius: 20
        
    },
    btntxt: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        
    },
    bg: {
        backgroundColor: "#8080ff",
        height: 550
    },
    img: {
        height: 550
    },
    logoutbtn: {
        backgroundColor: "#003E7D",
        width: 80,
        height: 25,
        borderRadius: 20
    },
    logoutxt: {
        color: "white",
        textAlign: "center"
    }
});

export default Dhome;