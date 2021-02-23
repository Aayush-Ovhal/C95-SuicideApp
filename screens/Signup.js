import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class Signup extends React.Component{

    constructor(){
     super();
     this.state={
         name: "",
         gmail: "",
         pwd: ""
     }   
    }

    userSignup=(gmail, pwd)=>{
        firebase.auth().createUserWithEmailAndPassword(gmail, pwd)
        .then(()=>{
            db.collection("users").add({
                name: this.state.name,
               emailId: this.state.gmail
            })
        })
        this.props.navigation.navigate("Question")
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaProvider>

                    <Header
                     centerComponent={{text: "Welcome!!", style:{fontWeight: 'bold', fontSize: 30, color: "#68D693"}}}
                    />

                <TextInput
                style={[styles.textInput, {marginTop: 70}]}
                 placeholder="Think of a nickname for yourself!"
                 onChangeText={
                     (text)=>{
                         this.setState({
                          name: text
                         })
                     }}/>

                <TextInput
                style={[styles.textInput, {marginTop: 20}]}
                 placeholder="Enter your Gmail Id"
                 onChangeText={
                     (text)=>{
                      this.setState({
                          gmail: text
                      })
                   }}/>

                   <TextInput
                    style={[styles.textInput, {marginTop: 20}]}
                    placeholder = "Password(Max 10 characters)"
                    secureTextEntry={true}
                    maxLength={10}
                    onChangeText={
                        (text)=>{
                          this.setState({
                              pwd: text
                          })
                        }
                    }
                   />

                <TouchableOpacity
                 style={styles.buttonStyle}
                 onPress={()=>{this.userSignup(this.state.gmail, this.state.pwd)}}>
                    <Text style={styles.textStyle}>
                        Add User
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.logIn}
                 onPress={()=>{this.props.navigation.navigate("LogIn")}}
                     >
                    <Text style={styles.textStyle}>
                        Log In{">>"}
                    </Text>
                </TouchableOpacity>

                </SafeAreaProvider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textInput: {
        borderWidth: 2,
        width: 300,
        height: 40,
        marginLeft: 40,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
        borderRadius: 5,
        fontFamily: "Bahnscrift"
    },
    buttonStyle: {
        backgroundColor: "#ff9800",
        width: 200,
        height: 50,
        borderRadius: 40,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        marginLeft: 100,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 2
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16
    },
    textStyle:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#0267B3"
    },
    logIn: {
     marginTop: -290,
     marginLeft: 260,
     backgroundColor: "#F28D35",
     width: 100,
     height: 40,
     alignItems: "center",
     textAlign: "center",
     justifyContent: "center",
     borderRadius: 5,
     shadowOffset: {
         width: 8,
         height: 3
     },
     shadowOpacity: 0.4,
     shadowRadius: 10.32,
     elevation: 16
    }
})