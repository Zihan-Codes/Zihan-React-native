import React, { Component, useState } from "react";
import axios from "axios";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Button, Alert } from "react-native";


class Mytryp extends Component{

   

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            data: []
        };
    }

    getlist(id, sl, el, pn){
        order = {

            "id" : id,
            "slocation" : sl,
            "elocation" : el,
            "phone" : pn
        }

         Alert.alert(sl + id);
         //console.log(e);
        this.props.navigation.navigate('Order', {p1: order}

        );
       // console.log(p1);

    }

    componentDidMount(){
        this.GetName();
    }

    async GetName(){
       // const Apiurl = "http://10.0.2.2:8000/api/car/driver1";
        const Apiurl = "http://10.0.2.2/ziga/Rooh/Lab Test - 03/show json.php";
       
        
      
        let res = await fetch(Apiurl)
          let respjson = await res.json()
          this.setState({data: respjson.dete})
        //  this.setState({data: respjson.carorder})
        //  console.log(respjson.carorder);
        
        
        /*.then((response)=>{
            alert(response)
        })*/
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.h2}>All Orders</Text>
                
                
                <FlatList
                
                data={this.state.data}
                renderItem = {({item})=>(
                    <View>
                        <Text style={styles.datac}>
                            
                            <Text style={styles.h1}>{'\n'}Pickup Location: </Text>
                            {item.EMP_DEPT}
                            
                            
                        <Text style={styles.h1}>{'\n'}Pickout Location: </Text>
                        {item.DEPT_TYPE}
                        <Text style={styles.h1}>{'\n'}Contact Number: </Text>
                
                {item.EMP_DEPT_NO}
                
                </Text>
                <TouchableOpacity style={styles.btnact} onPress={() => this.getlist(item.id, item.slocation, item.elocation, item.phone)} >
                    <Text style={styles.btnactxt}>View Details</Text>
                    
                </TouchableOpacity>
                <View style={styles.hrline}/>
                    </View>
                )
                        
                
                    
                
               }
               
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    datac: {
        color: 'black',
        fontSize: 20
    },
    btnact: {
        backgroundColor: 'green',
        width: 100,
        
        
    },
    btnactxt: {
        fontSize: 15,
        color: 'white'
    },
    hrline: {
        borderBottomColor: 'red',
        borderBottomWidth: 5,
        marginTop: 20
    },
    h1: {
        fontWeight: 'bold'
    },
    h2: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold'
    },
    endline: {
        borderBottomColor: 'red',
        borderBottomWidth: 10,
        marginTop: 30
    }
});

export default Mytryp;