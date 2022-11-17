import React, { Component } from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView,  Alert, ImageBackground} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
//import RadioButton from './components/RadioButton';
import axios from 'axios';
import bg4 from '../assets/bg4.jpeg';




class Driver2 extends Component{
    constructor()
    {
        super();
        this.state={
            name: '',
            pkup: '',
            pkout: '',
            mobile: '',
            email: '',
            vehi: '',
            
        }
    }

    submit()
    {
      
      
       const pkup = this.state.pkup;
       const pkout = this.state.pkout;
       const mobile = this.state.mobile;
       const email = this.state.email;
       const name = this.state.name;
       const vehicle = this.state.vehi;
       console.log(vehicle);

      axios.post('http://10.0.2.2:8000/api/order/add',{name:name, slocation:pkup, elocation:pkout,mobile:mobile, vehicle:vehicle, email:email}).then(res => console.log(res.data));
      
      // console.log("way to success ");
      // Alert.alert("get ready ziga");

      this.props.navigation.navigate('Loading', {email: email,pkup: pkup, pkout: pkout, vehicle: vehicle});

    }

    getname(){
        const name = this.props.route.params.name;
        const mobile = this.props.route.params.mobile;
        const email = this.props.route.params.email;
         this.setState({name: name, mobile: mobile, email: email});

         

        console.log(name);
    }

    componentDidMount(){
        this.getname();
    }

    
    

    render()
    {
        const data1 = [
            
            {label:  "TukTuk", value: "TukTuk" },
            {label: "Car", value: "Car" },
            {label: "Van", value: "Van" },
            {label: "Bus", value: "Bus" },
            
          ];

        return(
            <ImageBackground source={bg4} resizeMode="cover" style={styles.img}>
            <ScrollView>
                <View>
                
                <Text style={styles.h1}>
                Choose Your Vehicle
                </Text>
                <View>
                <Text style={styles.p1}>&spades;<Text>Pickup Point</Text></Text>
                
                    <TextInput 
                    style={styles.p2}
                    placeholder="Enter place"
                    value={this.state.pkup}
                    onChangeText={text => this.setState({pkup:text})}
                     />
                </View>
                <View>
                <Text style={styles.p1}>&spades;<Text>Pickout Point</Text></Text>
                
                <TextInput
                style={styles.p2}
                value={this.state.pkout}
                placeholder="Enter place"
                onChangeText={text => this.setState({pkout:text})}
                />
                </View>
                {/* <View>
                <Text style={styles.p1}>&spades;<Text>Contact Number</Text></Text>
                <TextInput
                style={styles.p2}
                placeholder="Enter contact Number"
                value={this.state.mobile}
                onChangeText={text => this.setState({mobile:text})}
                />
                </View> */}
                
                <View
                //   style={{
                //        borderBottomColor: 'red',
                //        borderBottomWidth: 25,
                //        marginLeft: 20,
                //        marginRight: 20,
                //        marginTop: 20,
                //        borderRadius: 10,
                //        marginBottom: 20,

                //     }}
                  />

                   <Text style={styles.p1}>&spades;<Text>Choose the vehicle</Text></Text>
                  <RadioButtonRN  style={styles.rad1} data={data1} selectedBtn={data1 => this.setState({vehi:data1.value})} />

                  

                  <TouchableOpacity style={styles.btno} onPress={()=>this.submit()}>
                      <Text style={styles.btnotxt}>Place Order</Text>
                  </TouchableOpacity>
                 
                
                  
            </View>
            </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
   
    h1: {
        fontSize: 40,
        color: 'white',
        marginLeft: 20,
        marginRight: 40,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: "center"
    },
    p1: {
        color: 'black',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    p2: {
         color: 'black',
         fontSize: 20,
         marginLeft: 80,
         marginTop: 10,
         borderColor: 'black',
         backgroundColor: '#b3f0ff',
         width: 210
    },
    rad1: {
        color: 'red',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20,
        
        
    },
    btno: {
        backgroundColor: 'blue',
        width: 250,
        marginLeft: 40,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 50
    },
    btnotxt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    img: {
        height: 550
    }
});

export default Driver2;