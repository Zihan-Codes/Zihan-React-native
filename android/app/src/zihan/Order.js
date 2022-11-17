import React, { Component, useState } from "react";
import axios from 'axios';
import { RefreshControl} from 'react-native';

//import Button from 'react-native-bootstrap-buttons';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    TouchableOpacity,
    FlatList
  } from 'react-native';




  class Order extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            slocation: "",
            elocation: "",
            mobile: "",
            refr: true,
            loading: true,
            isFetching: false,
            data: []
        };
    }

    

    

    componentDidMount(){
        this.order();
    }


    async order(){

        const id = this.props.route.params.id;
        console.log(id);
        console.log(id);
        console.log(id);
        const Apiurl = "http://10.0.2.2:8000/api/vorder/"+id;
        
      
        let res = await fetch(Apiurl)
          let d = await res.json()
          this.setState({data: d.vorder})


         // const ab = d.vorder.name;
          if(d.vorder==null){
            console.log("no datas");
            this.setState({loading: true})
          }else {
            
            this.setState({name: d.vorder.name,
                slocation: d.vorder.slocation,
                elocation: d.vorder.elocation,
                mobile: d.vorder.mobile,
                id: d.vorder.id,
                loading: false
})
          }
          

        

         
    }
    fun2(){
        console.log("still refreshing");
        //this.fun2();
    }

    

    myfun(){

       // console.log(route.params.p1);
      //  console.log("route.params.p1");
       const name = this.state.name;
       const slocation = this.state.slocation;
       const elocation = this.state.elocation;
       const phone = this.state.mobile;
       const id = this.state.id;

       console.log(name);
       console.log(slocation);
       console.log(elocation);
       console.log(phone);
       console.log(id);

       axios.post('http://10.0.2.2:8000/api/add/ongoing', {id:id, name:name, slocation:slocation, elocation:elocation, mobile:phone}).then(res => console.log(res.data));

       axios.delete('http://10.0.2.2:8000/api/delete/order/'+id)
       .then(() => this.setState({ status: 'Delete from order table successfully' }));

        this.props.navigation.navigate('Dmap', {id:id, name:name, slocation:slocation, elocation:elocation, phone:phone});

       
    }
    
    

    render(){
        

        

       // const a = 'jaffna';
        const uname = this.state.name;
        const slocation = this.state.slocation;
        const elocation = this.state.elocation;
        const phone = this.state.mobile;
        const loading = this.state.loading;
        const refr = this.state.refr;
      //console.log(this.state.name);
        
        

        const {navigation} = this.props;

        
        
        

       // const slocation = navigation.getParam('sloc','abcd');

       
        return(
            <ScrollView>
                <View style={styles.container}>
                    {loading && <Text style={styles.loadtext}>Still loading...</Text>}
                    {!loading && <View><Image
                     style={styles.img1}
                     source={{uri: 'https://w0.peakpx.com/wallpaper/461/414/HD-wallpaper-black-car-in-black-background-black-background.jpg'}}
                    />
                    <Text style={styles.h1}>Welcome to Driver App</Text>
                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickup Point</Text></Text>
                    <Text style={styles.b3}>{slocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickout Point</Text></Text>
                    <Text style={styles.b3}>{elocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Name</Text></Text>
                    <Text style={styles.b3}>{uname}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Mobile</Text></Text>
                    <Text style={styles.b3}>{phone}</Text>

                   
                 

                    <View>
                        <View style={styles.btn}><Button style={styles.btn1} title="Accept" onPress={() => this.myfun()}  /></View>
                        <Button style={styles.btn2} title="Decline"
                        onPress={() => this.props.navigation.goBack()}
                         />
                        
                        
                    </View></View>
                    
                    }
                    {refr && this.fun2()}
                    
                </View>
            </ScrollView>
        );
    }

  }

  const styles = StyleSheet.create({

      container: {
          borderColor: 'black',
          borderRadius: 25,
          backgroundColor: 'linen'


      },

      img1: {
        width: 260,
        height: 250,
        marginLeft: 30,
      },
      h1: {
         fontSize: 25,
         color: "#000066",
         marginLeft: 20,
         textAlign: 'center',
         fontWeight: 'normal',
         marginLeft: 60,
         marginRight: 60,
         marginTop: 20,
         marginBottom: 10,
       
      },
      b1: {
          color: 'black',
          marginLeft: 40,
          marginTop: 20
      },
      b2: {
          fontWeight: 'bold',
          fontSize: 20,
          
      },
      b3: {
          color: 'black',
          fontSize: 20,
          marginLeft: 40,
          marginTop: 20,
          backgroundColor: "#99b3ff",
          width: 200,
          textAlign: "center"
      },
      btn: {
          marginBottom: 10,
          marginTop: 20
         
          
          
      },
      btn1: {
        backgroundColor: 'green',
        
      },
      btn2: {
          backgroundColor: 'red',
          color: 'red',
          
      },
      loadtext: {
        color: '#000099',
        fontSize: 40
      }

  });

  export default Order;