import React,{useState,useEffect,useCallback,useRef } from 'react';
import { StyleSheet, Text, View,ScrollView,Input,Dimensions ,TextInput,ActivityIndicator,TouchableHighlight,TouchableOpacity,Alert } from 'react-native';



const Welcome = ({navigation}) => {

    setTimeout(function(){
 
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        navigation.navigate('LoginScreen')
   
      }, 5000);
   
   
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity    style={[styles.buttonContainer, styles.submitButton]}      onPress={() => navigation.navigate('LoginScreen')}
>
        <Text>Welcome Screen</Text>
        </TouchableOpacity>
        <Text>welcome back wait 5 sec</Text>


      </View>
    );
  }
   


  const styles = StyleSheet.create({
    MainContainer: {
        marginTop: 60
    },
    TextInputStyleClass: {
      textAlign: 'center',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      margin: 10,
      borderColor: '#D0D0D0',
      borderRadius: 5 ,
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20,
      width:"80%",
      borderRadius:30,
      marginTop: 20,
      marginLeft: 5,
    },
    captureButton: {
      backgroundColor: "#337ab7",
      width: 350,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    submitButton: {
      backgroundColor: "#C0C0C0",
      width: 350,
      marginTop: 5,
    },
    imageholder: {
      borderWidth: 1,
      borderColor: "grey",
      backgroundColor: "#eee",
      width: "50%",
      height: 150,
      marginTop: 10,
      marginLeft: 90,
      flexDirection: 'row',
      alignItems:'center'
    },
    previewImage: {
      width: "100%",
      height: "100%",
    }
 });


 export default Welcome ;

