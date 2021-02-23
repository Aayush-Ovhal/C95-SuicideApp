import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';
import questionDb from '../localdb';

export default class Questions extends React.Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            questionNo: 1,
            finalAns: ""
        }
    }

    changeQuestion=(dir)=>{

        if(dir == "forward" && this.state.questionNo < 4){
            this.setState({
                questionNo: this.state.questionNo+1
            })
        }else if(dir == "backward" && this.state.questionNo > 1){
            this.setState({
                questionNo: this.state.questionNo-1
            })
        }
    }

    updateAns=()=>{
      if(this.state.questionNo == 1){
          console.log(this.state.finalAns)
      }

      if(this.state.questionNo == 2){
        console.log("this.state.ans2")
    }

    if(this.state.questionNo == 3){
        console.log("this.state.ans3")
    }

    if(this.state.questionNo == 4){
        console.log("this.state.ans4")
    }

    this.setState({
        finalAns: ""
    })
    }

    render(){
        return(
          
            <SafeAreaProvider>
            <View style={styles.container}>
 
              <Header
               centerComponent={{text: "Questions", style:{fontSize: 30, fontFamily: 'Bahnschrift', fontWeight: "bold", color: "#68D693"}}}
              />

               <TextInput
                placeholder={questionDb["question"+this.state.questionNo].text}
                style={styles.textInputStyle}
                multiline={true}
                onChangeText={
                    (text)=>{
                        if(this.state.questionNo == 1){
                          this.setState ({
                              ans1: text,
                              finalAns: this.state.ans1
                          })
                        }
                        else if(this.state.questionNo == 2){
                          this.setState({
                              ans2: text
                          })
                          this.setState({
                              finalAns: this.state.ans2
                          })
                        }
                        else if(this.state.questionNo == 3){
                            this.setState({
                                ans3: text
                            })
                            this.setState({
                                finalAns: this.state.ans3
                            })
                        }
                        else if(this.state.questionNo == 4){
                            this.setState({
                                ans4: text
                            })
                            this.setState({
                                finalAns: this.state.ans4
                            })
                        }
                    }
                }
                value = {this.state.finalAns}
              />

               

               
            </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textStyle: {
        fontSize: 30,
        fontFamily: "Bahnschrift"
    },
    buttonStyle: {
     width: 200,
     height: 50,
     marginTop: 25,
     marginLeft: 90,
     alignItems: "center",
     textAlign: "center",
     justifyContent: "center",
     borderRadius: 30,
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     backgroundColor: "#F25C05"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Bahnschrift"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        marginLeft: 700
    },
    textInputStyle:{
        width: 300,
        height: 200,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        fontFamily: "Bahnschrift",
        marginLeft: 40,
        marginTop: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32
    },
    fbButton: {
      backgroundColor: "#27B7F5",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 8,
          height: 4
      },
      elevation: 16,
      shadowRadius: 10.32,
      shadowOpacity: 0.30
    }
})