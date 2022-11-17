import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Payment2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
            pkup: '',
            pkout: '',
            amount: '',
            distence: '',
            vehicle: '',
            pamnt  : ''
          
           
        };
    }
    pay(){
        console.log("Payment page");
        this.props.navigation.navigate('Payment');
    }

    home(){
        this.props.navigation.navigate('User');
    }

    componentDidMount(){
        this.getDetails();
    }
    getDetails(){
        const pkup = this.props.route.params.pkup;
      const pkout = this.props.route.params.pkout;
      const vehicle = this.props.route.params.vehicle;

      console.log("1:  "+vehicle);

      if(vehicle == "Bus"){
        const peramount = 300;
        this.setState({pamnt: 300});

        if(pkup=="Wellawatta" && pkout == "Dhehiwala"){
            const distence = 10;
           
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
            console.log(this.state.distence);
    
          }else if(pkup == "Kandy" && pkout == "Colombo"){
            const distence = 120;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }else if(pkup == "Galle" && pkout == "Matara"){
            const distence = 40;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }
    
          this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});

        console.log(peramount);
    }else if(vehicle == "Car"){
        const peramount = 250;
        this.setState({pamnt: 250});

        if(pkup=="Wellawatta" && pkout == "Dhehiwala"){
            const distence = 10;
           
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
            console.log(this.state.distence);
    
          }else if(pkup == "Kandy" && pkout == "Colombo"){
            const distence = 120;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }else if(pkup == "Galle" && pkout == "Matara"){
            const distence = 40;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }
    
          this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});

        console.log(peramount);
    }else if(vehicle == "TukTuk"){
        const peramount = 200;
        this.setState({pamnt: 200});

        if(pkup=="Wellawatta" && pkout == "Dhehiwala"){
            const distence = 10;
           
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
            console.log(this.state.distence);
    
          }else if(pkup == "Kandy" && pkout == "Colombo"){
            const distence = 120;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }else if(pkup == "Galle" && pkout == "Matara"){
            const distence = 40;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }
    
          this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});

    }else if(vehicle == "Van"){
        const peramount = 200;
        this.setState({pamnt: 200});

        if(pkup=="Wellawatta" && pkout == "Dhehiwala"){
            const distence = 10;
           
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
            console.log(this.state.distence);
    
          }else if(pkup == "Kandy" && pkout == "Colombo"){
            const distence = 120;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }else if(pkup == "Galle" && pkout == "Matara"){
            const distence = 40;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }
    
          this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});

    }else{
        const peramount = 200;
        this.setState({pamnt: 200});

        if(pkup=="Wellawatta" && pkout == "Dhehiwala"){
            const distence = 10;
           
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
            console.log(this.state.distence);
    
          }else if(pkup == "Kandy" && pkout == "Colombo"){
            const distence = 120;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }else if(pkup == "Galle" && pkout == "Matara"){
            const distence = 40;
            const amount = distence*peramount;
            this.setState({amount: amount, distence: distence});
          }
    
          this.setState({pkup: pkup, pkout: pkout, vehicle: vehicle});
    }

     console.log(this.state.pamnt);

    
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnh} onPress={()=> this.home()}><Text style={styles.btnhtxt}>Home</Text></TouchableOpacity>
                
                <Text style={styles.txt2}>Starting point : </Text>
                <Text style={styles.locations}>{this.state.pkup}</Text>
                <Text style={styles.txt2}>Ending point : </Text>
                <Text style={styles.locations}>{this.state.pkout}</Text>
                <Text style={styles.txt2}>Distance: {this.state.distence} km</Text>
                <Text style={styles.txt2}>Amount : {this.state.amount}.00</Text>
                <Text style={styles.txt2}>Vehicle : {this.state.vehicle}</Text>

                <TouchableOpacity onPress={()=>this.pay()} style={styles.btn}><Text style={styles.btntxt}>Pay through Bank deposit</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'blue',
        width: 200,
        borderRadius: 15,
        marginTop: 50,
        marginLeft: 60
    },
    btntxt: {
        color: 'white',
        textAlign: "center",
        
    },
    txt2: {
        color: 'black',
        fontSize: 20
    },
    locations: {
        color: 'red',
        fontSize: 25,
        marginLeft: 80
    },
    container: {
        marginTop: 50
    },
    btnh: {
        backgroundColor: 'blue',
        width: 100
    },
    btnhtxt: {
        color: "white",
        textAlign: "center"
    }
});

export default Payment2;