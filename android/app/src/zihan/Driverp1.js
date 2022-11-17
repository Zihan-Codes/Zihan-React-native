import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Driverp1 extends Component{

    orders = () => {
        this.props.navigation.navigate('OrderList');
    }
    render()
    {
        return(
            <View>
               <Text style={styles.p1}>
                   Driver front page
               </Text>
               <Button onPress={this.orders} title='Orders' />
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    p1: {
        color: 'black',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 30,
    },
});

export default Driverp1;