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




  class Mydetails extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            slocation: "",
            elocation: "",
            mobile: "",
            date: "",
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
        const Apiurl = "http://10.0.2.2:8000/api/history/"+id;
        
      
        let res = await fetch(Apiurl)
          let d = await res.json()
          this.setState({data: d.history})


         // const ab = d.vorder.name;
          if(d.history==null){
            console.log("no datas");
            this.setState({loading: true})
          }else {
            
            this.setState({name: d.history.name,
                slocation: d.history.slocation,
                elocation: d.history.elocation,
                mobile: d.history.mobile,
                id: d.history.id,
                date: d.history.created_at,
                loading: false
})
          }
          

        

         
    }
    fun2(){
        console.log("still refreshing");
        //this.fun2();
    }

    

    
    
    

    render(){
        

        

       // const a = 'jaffna';
        const uname = this.state.name;
        const slocation = this.state.slocation;
        const elocation = this.state.elocation;
        const phone = this.state.mobile;
        const date = this.state.date;
        const loading = this.state.loading;
        const refr = this.state.refr;
      //console.log(this.state.name);
        
        

        const {navigation} = this.props;

        
        
        

       // const slocation = navigation.getParam('sloc','abcd');

       
        return(
            <ScrollView>
                <View style={styles.container}>
                    {loading && <Text style={styles.loadtext}>Still loading...</Text>}
                    {!loading && <View>
                    <Text style={styles.h1}>Your previous trip details</Text>
                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickup Point</Text></Text>
                    <Text style={styles.b3}>{slocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Pickout Point</Text></Text>
                    <Text style={styles.b3}>{elocation}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Name</Text></Text>
                    <Text style={styles.b3}>{uname}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Mobile</Text></Text>
                    <Text style={styles.b3}>{phone}</Text>

                    <Text style={styles.b1}>&spades; <Text style={styles.b2}>Date</Text></Text>
                    <Text style={styles.b3}>{date}</Text>

                   
                 

                    <View style={styles.btn2}>
                        <Button  title="GoBack"
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
          marginTop: 20
          
      },
      loadtext: {
        color: '#000099',
        fontSize: 40
      }

  });

  export default Mydetails;