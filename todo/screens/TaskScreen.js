import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

const TaskScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.text}><Text style={styles.text}>{props.text}</Text></TouchableOpacity>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({

    container:{
        marginLeft:40,
        width:"80%",
        backgroundColor:"#C1F0F6",
        padding:15,
        borderRadius:10,
        marginBottom:15,
  },
  text:{
    fontSize:15,
    maxWidth:"80%",
    fontWeight:"bold",
  }


})