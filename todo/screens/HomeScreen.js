import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import { useState } from 'react';

const HomeScreen = () => {
    const data=[]
    const [pressed, setPressed]=useState(false);

  return (
    <View>
        <Image style={styles.image}/>
      <Text style={styles.text}>HomeScreen</Text>
      
      <TextInput placeholder="Todo" style={styles.input}
          onChangeText={ (text)=>{data.push(text), console.log(text, data.length)}}
      />
      
      
      
      
      <TouchableOpacity style={styles.button} onPress={()=>{setPressed(true), setTimeout(()=>{setPressed(false)},2000)}}><Ionicons name={pressed?"checkmark-circle":"add-circle-sharp"} size={30}  style={{fontSize:35,color:pressed?"green":"black"}}  /></TouchableOpacity>

    </View>

  )

}


export default HomeScreen

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        color:'blue',
        fontWeight:"bold",

    },
    input:{
        borderWidth:1,
        width:"80%",
        height:"25%",
        borderRadius:5,
        marginTop:10,
        marginLeft:40,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",


    },
    button:{
        
    }
})

