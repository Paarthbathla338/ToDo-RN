import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import TaskScreen from "./TaskScreen"
import Photo from "../assets/tasks.png"


const HomeScreen = () => {
    const data=[]
    const [pressed, setPressed]=useState(false);
    const [task, setTask]=useState();
    const [taskItems,setTaskItems]=useState([]);

    const handleAddTask=()=>{
        setTaskItems([...taskItems,task])
        setTask('')
        console.log(taskItems)    
}

    const completeTask=(index)=>{
        let itemCopy=[...taskItems]
        itemCopy.splice(index,1)
        setTaskItems(itemCopy)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today's Tasks</Text>



      <View style={styles.papaview}>
      
      <TextInput placeholder="Todo" style={styles.input}
          onChangeText={text=>setTask(text)}
          value={task}
      />

      
      
      
      
      <TouchableOpacity style={styles.button} onPress={()=>{setPressed(true), setTimeout(()=>{setPressed(false)},2000), handleAddTask()}}><Ionicons name={pressed?"checkmark-circle":"add-circle-sharp"} size={1000}  style={{fontSize:35,color:pressed?"green":"#53868B"}}  /></TouchableOpacity>
      </View>

      <View style={styles.item}>

    {taskItems.map((item,index)=>{
      return(
          <TouchableOpacity key={index} onPress={()=>completeTask(index)}><TaskScreen  text={item}/></TouchableOpacity>
      ) 
    })}
    </View>


    

    </View>

  )

}


export default HomeScreen

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:'#6C63FF',
        fontWeight:"bold",
        marginTop:50,
        justifyContent:"center",
        alignItems: 'center',
        marginLeft:20

    },
    input:{
        // borderWidth:1,
        // width:"80%",
        // height:"80%",
        // borderRadius:25,
        // marginLeft:10,
        // marginRight:10,
        // justifyContent:"center",
        // alignItems:"center",
        // backgroundColor:"#fff",
        paddingVertical:15,
        paddingHorizontal:20,
        backgroundColor:"#fff",
        borderRadius:60,
        borderColor:"#C0C0C0",
        borderWidth:1,
        width:250,
        alignItems: 'center',
        justifyContent:"center",
        marginTop:40,
        marginLeft:55,

        


    },
    button:{
        // marginLeft:"1%",
        // marginTop:"2%"
        width:60,
        height:60,
        backgroundColor:"#fff",
        borderRadius:60,
        justifyContent:"center",
        borderColor:"#C0C0C0",
        marginLeft:10,
        marginTop:40,


    },
    papaview:{
        flexDirection:"row",
    },
    item:{
        marginTop:30,
    },
    container:{
        flex:1,
    },
    image:{
        width:"100%",
        height:"35%",

    }
})

