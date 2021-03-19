import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:'',
            secureTextEntry:'true'
          }

          userSignUp = (emailId,password,confirmPassword) => 
          {
            if(password !== confirmPassword)
            {
                Alert.alert(" Your Password does not match. Please Check again! ")
            }else{
                firebase.auth().createUserWithEmailAndPassword(emailId, password)
                .then(()=>{
                    db.collection("Users"),add({
                        first_name:this.state.firstName,
                        last_name:this.state.lastName,
                        contact_number:this.state.contactNumber,
                        address:this.state.houseAddress,
                        email_id:this.state.emailId
                    })
                    return Alert.alert("Your account have been succesfully added!")
                    .catch((error)=> {
                       // Handle Errors here.
                       var errorCode = error.code;
                       var errorMessage = error.message;
                       return Alert.alert(errorMessage)
                     });
                })
            }
          }

          userLogin = (emailId,password) => 
          {
            firebase.auth().signInWithEmailAndPassword(emailId,password)
             .then(()=>{
               this.props.navigation.navigate("")
               })
         .catch((error)=>{
         var errorCode = error.code;
         var errorMessage = error.message;
         return Alert.alert(errorMessage);
     })
   }
         
  }
}

 const styles = StyleSheet.create({
     viewContainer:{
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#003152'
     }
 }) 