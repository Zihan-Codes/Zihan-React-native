import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
//import AnimatedLottieView from 'lottie-react-native';
//import {} from './'
//import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 2000);
  }

  render() {
    const { visible } = this.state;
    return (
      // <AnimatedLoader
      //   visible={visible}
      //   overlayColor="rgba(255,255,255,0.75)"
      //   //source={require("./loader.json")}
      //   source={require("../zihan/loader.json")}
      //   animationStyle={styles.lottie}
      //   speed={1}
      // >
      //   <Text>Doing something...</Text>
      // </AnimatedLoader>
      <View><Text>hiii</Text>
       
       <ActivityIndicator size={150} color="#00ff00" />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  },
  load: {
    height: 200,
    //width: 200

  }
});