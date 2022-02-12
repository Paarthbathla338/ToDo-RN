import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import TaskScreen from "./TaskScreen"

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

  return (
    <View>
        <Image style={styles.image}/>
      <Text style={styles.text}>HomeScreen</Text>
      
      <TextInput placeholder="Todo" style={styles.input}
          onChangeText={text=>setTask(text)}
          value={task}
      />

      {taskItems.map((item)=>{
            return <TaskScreen text={item}/>
      })}
      
      
      
      
      <TouchableOpacity style={styles.button} onPress={()=>{setPressed(true), setTimeout(()=>{setPressed(false)},2000), handleAddTask()}}><Ionicons name={pressed?"checkmark-circle":"add-circle-sharp"} size={30}  style={{fontSize:35,color:pressed?"green":"black"}}  /></TouchableOpacity>

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

