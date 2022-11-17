/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 
 
 import {NavigationContainer} from "@react-navigation/native";
 import {createNativeStackNavigator} from "@react-navigation/native-stack"
 
 import Page1 from './android/app/src/screens/Page1';
 import LoginScreen from './android/app/src/screens/LoginScreen';
 import dashboard from './android/app/src/screens/dashboard';
 import front from './android/app/src/zihan/front';
 import Names from './android/app/src/zihan/Showname';
 import Driver2 from './android/app/src/zihan/Request';
 import Uload from './android/app/src/zihan/Userloading';
 import Route from './android/app/src/zihan/Route';
 import User from './android/app/src/zihan/Uhome';
 import Payment from './android/app/src/vithurshan/Payment';
 import Order from './android/app/src/zihan/Order';
 import Method from './android/app/src/vithurshan/Method';
 import History from './android/app/src/zihan/History';
 import Cash from './android/app/src/zihan/cash';
 import Dhome from './android/app/src/zihan/Driverhome';
 import Dmap from './android/app/src/zihan/Drivermap';
 import Mydetails from './android/app/src/zihan/historydetails';
 import Payment2 from './android/app/src/vithurshan/Payment2';
 import Loader from './android/app/src/zihan/Loading2';
 
 
 const Stack = createNativeStackNavigator();
 
 
 const App: () => Node = () => {
   
   return (
    
       <NavigationContainer>
       <Stack.Navigator screenOptions={{
     headerShown: false
   }} initialRouteName='login'>
         
         <Stack.Screen name='Home' component={Page1} />
         <Stack.Screen name='login' component={LoginScreen} />
         <Stack.Screen name='welcome' component={front} />
         <Stack.Screen name='OrderList' component={Names} />
         <Stack.Screen name='Request' component={Driver2} />
         <Stack.Screen name='Loading' component={Uload} />
         <Stack.Screen name='Route' component={Route} />
         <Stack.Screen name='User' component={User} />
         <Stack.Screen name='Payment' component={Payment} />
         <Stack.Screen name='Order' component={Order} />
         <Stack.Screen name='Method' component={Method} />
         <Stack.Screen name='history' component={History} />
         <Stack.Screen name='cash' component={Cash} />
         <Stack.Screen name='dhome' component={Dhome} />
         <Stack.Screen name='Dmap' component={Dmap} />
         <Stack.Screen name='Mydetails' component={Mydetails} />
         <Stack.Screen name='Pay2' component={Payment2} />
         <Stack.Screen name='Load' component={Loader} />
         
         
       </Stack.Navigator>
     </NavigationContainer>
    
   );
 };
 
 
 export default App;
 