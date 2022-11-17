import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, FlatList, Alert } from 'react-native';
import axios from 'axios';

const image = { uri: "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-fashion-atmosphere-car-modification-auto-repair-poster-design-image_196919.jpg" };
const image2 = {uri: "https://w0.peakpx.com/wallpaper/758/615/HD-wallpaper-supra-mk4-cars-japanese-jdm-toyota-thumbnail.jpg"};
import tw from "tailwind-react-native-classnames";

class First extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobile: "",
            role: "",
            uname: "",
            email: "",
            isUser: true,
            isFetching: false,
            data: []
        };
    }

    

    async driver22(){
        const email = this.state.email;
        console.log("I'm driver");
        console.log(email);
       // await axios.post('http://10.0.2.2:8000/api/get/name',{email:email}).then(res => this.setState({data: res.data.history}));

    }

    componentDidMount(){
        this.get();

    }

    async get(){
         const email = this.props.route.params.email;
         const pswrd = this.props.route.params.password;
        // this.setState({name: name});
 
         console.log(email);
        // console.log(name);
         await axios.post('http://10.0.2.2:8000/api/user/name',{email:email}).then(res => {console.log(res.data.users[0].role);
           this.setState({data: res.data.users[0]});
 
           console.log(this.state.data);
         console.log(this.state.data.name);
         console.log(this.state.data.mobile);
         console.log(this.state.data.role);
         const uname = this.state.data.name;
         const role = this.state.data.role;
         const mobile = this.state.data.mobile;
         const email = this.state.data.email;
         console.log(uname);
         this.setState({uname: uname, mobile: mobile, email: email});
 
         
 
              if(role=="driver"){
              //this.props.navigation.navigate();
              console.log("you are a driver");
              this.setState({isUser: false});
             // this.props.navigation.navigate('dhome');
             }else {
              //move to customer page
              console.log("you are a customer");
             // this.props.navigation.navigate('User', {name: this.state.uname});
             };
             
         });
 
         if(pswrd != this.state.data.password){
             console.log("your password is wrong");
             Alert.alert("Password is incorrect");
             this.props.navigation.navigate('login');
         }else {
             console.log("password is correct");
         }
         
        
 
         
         // if(this.state.data.role=="driver"){
         //     console.log("you are a driver");
         //   this.props.navigation.navigate('dhome');
         // }else {
         //     console.log("you are a customer");
         //   //  console.log();
         //      this.props.navigation.navigate('User', {name: this.state.name});
         // }
 
         //console.log(this.state.data.name);
        // console.log(data.mobile);
        
        
        
     }
     driver(){
         console.log("joined as Driver");
         //Alert.alert("clicked");
         this.props.navigation.navigate('dhome');
     }
 
     customer(){
         console.log("joined as customer");
         this.props.navigation.navigate('User', {name: this.state.uname, mobile: this.state.mobile, email: this.state.email});
     }
     logout(){
         this.props.navigation.navigate('login');
     }
 
     render()
     {
         const name = this.state.name;
         const uname = this.state.uname;
         const isUser = this.state.isUser;
         console.log("name from dtatabase");
         console.log(uname);
         return(
             <ScrollView>
                 
                 <View style={styles.head}>
                     
                     <ImageBackground source={image} resizeMode="cover" style={styles.car}>
                         <TouchableOpacity onPress={()=> this.logout()} style={styles.sbtn}><Text style={styles.logoutxt}>Signout</Text></TouchableOpacity>
                     <Text style={tw`text-center py-5 text-xl `}>Welcome to Companion</Text>
 
                         
                         <Text style={styles.nametxt}>Hello {uname} ! </Text>
                         {/* <Text style={styles.headtxt}>Welcome to</Text>
                         <Text style={styles.headtxt}>Companion</Text> */}
                     </ImageBackground>
                     
                     
                 </View>
                
                 <View style={styles.bdy}>
                 
                       {!isUser && <View style={styles.driver}>
                         
                         <Text style={styles.text}>Join as a Driver</Text>
                         <TouchableOpacity onPress={()=>this.driver()} style={styles.btn}><Text style={styles.btntxt}>Join</Text></TouchableOpacity>
                        
                     </View>}
                     {isUser && <View style={styles.driver}>
                         <Text></Text>
                         <Text style={styles.text}>Join as a</Text>
                         <Text style={styles.text}>Customer</Text>
                         <TouchableOpacity onPress={()=>this.customer()} style={styles.btn}><Text style={styles.btntxt}>Join</Text></TouchableOpacity>
                     </View> }
                      
                     
                     
                 </View>
                
             </ScrollView>
         );
     }
 }
 
 const styles = StyleSheet.create(
     {
         head: {
             backgroundColor: '#00fa9a',
             height: 200,
             alignContent: "center",
             textAlign: "center"
         },
         bdy: {
             backgroundColor: '#ccf2ff',
             height: 450
         },
         btn: {
             width: 100,
             height: 30,
             backgroundColor: '#0066ff',
             marginBottom: 20,
             marginTop: 20,
             alignItems: "center",
         },
         btntxt: {
             color: 'white',
             alignItems: "center",
             fontSize: 20,
         },
         text: {
             color: '#00004d',
             fontSize: 20
         },
         driver: {
             alignItems: "center",
             marginTop: 40,
             backgroundColor: '#80dfff',
             width: 300,
             marginLeft: 10,
             borderRadius: 30
         },
         headtxt: {
             color: '#262626',
             fontSize: 25,
             textAlign: "center"
         },
         nametxt: {
             color: '#262626',
             fontSize: 25,
             textAlign: "center",
             marginTop: 20,
             marginBottom: 30
         },
         car: {
             height: 200
           },
           car2: {
             height: 100
           },
 
           sbtn: {
             backgroundColor: "#003E7D",
             width: 80,
             height: 25,
             borderRadius: 20,
             marginTop: 10
           },
           logoutxt: {
             color: "white",
             textAlign: "center"
         }
     }
 );
 
 export default First;