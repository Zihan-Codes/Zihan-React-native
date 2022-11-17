import React, { Component } from "react";
import { Button, Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ferrari2 from '../assets/ferrari2.jpg';
import axios from "axios";

//const image = { uri: "https://thumbs.dreamstime.com/b/tourist-bus-10254354.jpg" };

class User extends Component{
    constructor()
    {
        super();
        this.state={
            name: '',
            mobile: '',
            email: '',
            data2: []
            
        }
    }

    componentDidMount(){
        this.getname();
    }

     getname(){
        const name = this.props.route.params.name;
        const mobile = this.props.route.params.mobile;
        const email = this.props.route.params.email;
        this.setState({name: name, mobile: mobile, email: email});

        
    }

    payment(){
        console.log("move to payment page");
        this.props.navigation.navigate('Payment');
    }
    async request(){
        console.log("move to requesting page");

        const email = this.state.email;

        await axios.post('http://10.0.2.2:8000/api/order/find/id',{email:email}).then(res => {console.log(res.data.orderid[0].id);
          this.setState({data2: res.data.orderid[0]});

          console.log(this.state.data2);
        console.log(this.state.data2.id);
        const id = this.state.data2.id;
        if(id != 0){
            console.log("you didn't complete your previous trip...");
            this.props.navigation.navigate('Loading', {email: email});
        }else {
            console.log("you can");
            this.props.navigation.navigate('Request', {name: this.state.name, mobile: this.state.mobile, email: this.state.email});
        }
        
        //this.setState({id: id});

            
        });

       
       

    }
     history(){
        console.log("move to History page");
        
        this.props.navigation.navigate('history', {name: this.state.name});
    }
    render(){
        return(
            <View>
                <ImageBackground source={ferrari2} resizeMode="cover" style={styles.image}>
                    
                <Text style={styles.header}>Welcome to Companion</Text>
                <View>
                    <TouchableOpacity onPress={()=>this.history()} style={styles.btn1}><Text style={styles.btntxt}>History</Text></TouchableOpacity>
                    
                </View>
                <View>
                <TouchableOpacity onPress={()=>this.payment()} style={styles.btn2}><Text style={styles.btntxt}>Payment</Text></TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={()=>this.request()} style={styles.btn3}><Text style={styles.btntxt}>Start a Trip</Text></TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        justifyContent: "center",
        height: 550
      },
      btn1 : {
        backgroundColor: '#33adff',
        borderRadius: 15,
        textAlign: "center",
        height: 30,
        width: 100,
        marginLeft: 110,
        marginBottom: 20,
        marginTop: 230
      //  marginTop: -40
      },
      btn2 : {
        backgroundColor: '#33adff',
        borderRadius: 15,
        textAlign: "center",
        height: 30,
        width: 100,
        marginLeft: 110,
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
        color: "black",
        fontSize: 25,
        textAlign: "center",
        backgroundColor: "white",
        width: 300,
        marginLeft: 10,
        marginTop: -150
    }
      
});

export default User;