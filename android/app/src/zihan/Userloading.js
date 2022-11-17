import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from "axios";

class Uload extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pkup: '',
            pkout: '',
            vehicle: '',
          
            loading: true,
            isFetching: false,
            data2: [],
            data: []
        };
    }

    cancel(){
      const id = this.state.id;

      axios.delete('http://10.0.2.2:8000/api/delete/order/'+id)
       .then(() => this.setState({ status: 'Delete from order table successfully' }));

       this.props.navigation.navigate('User');
    }
    
  async  myfunction(){
    const id= this.state.id;
        const Apiurl = "http://10.0.2.2:8000/api/order/"+id;
        let res = await fetch(Apiurl)
          let d = await res.json()
          this.setState({data: d.vorder})

        //  console.log(d.vorder);
         // console.log(d.vorder.name);

          if(d == 0){
            console.log("driver accepted");
            this.props.navigation.navigate('Route', {pkup:this.state.pkup, pkout:this.state.pkout, vehicle: this.state.vehicle});
          }else {
           // console.log("still not accepted");
           this.myfunction();
           
          }

       
      //  this.props.navigation.navigate('Route');
    }
    
    componentDidMount(){
      this.getId();
    }

    async getId(){
      const email = this.props.route.params.email;
      const pkup = this.props.route.params.pkup;
      const pkout = this.props.route.params.pkout;
      const vehicle = this.props.route.params.vehicle;

      console.log("loading page");
      console.log(pkup);
       
      await axios.post('http://10.0.2.2:8000/api/order/find/id',{email:email}).then(res => {console.log(res.data.orderid[0].id);
          this.setState({data2: res.data.orderid[0]});

          console.log(this.state.data2);
        console.log(this.state.data2.id);
        const id = this.state.data2.id;
        
        this.setState({id: id, pkup: pkup, pkout: pkout, vehicle: vehicle});

        console.log(this.state.pkout);
        console.log(this.state.vehicle);

        

            
            
        });
      
    }


    render(){

        const loading = this.state.loading;
     

        return(
            <View>
                
                <View style={styles.btn}>
                
                <Button onPress={()=>this.myfunction()} title="refresh"/>
                </View>
                
                {/* <Image
                     style={styles.img1}
                     source={{uri: 'https://www.elegantthemes.com/blog/wp-content/uploads/2022/01/lazy-loading.png'}}
                    /> */}
                    <ActivityIndicator style={styles.load} size={150} color="#00ff00" />
                    <Text style={styles.ldtxt}>Please wait untill Driver Accept</Text>
                    <TouchableOpacity onPress={()=>this.cancel()} style={styles.cancelbtn}><Text style={styles.cancelbtntxt}>Cancel</Text></TouchableOpacity>
                   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img1: {
        width: 330,
        height: 450,
       // marginLeft: 30,
      },
      btn: {
        width: 100,
        marginLeft: 200
       // paddingLeft: 20
      },
      ldtxt: {
        fontSize: 20,
        color: '#00ff00',
        textAlign: "center"
      },
      cancelbtn: {
        backgroundColor: 'red',
        width: 100,
        borderRadius: 20,
        marginLeft: 120,
        marginTop: 100
      },
      cancelbtntxt: {
        color: 'black',
        textAlign: "center"
      },
      load: {
        height: 250
      }
});

export default Uload;