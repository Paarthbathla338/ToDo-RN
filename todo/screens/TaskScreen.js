import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

const TaskScreen = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft:10,
        marginRight:10,
        borderRadius: 40,
        borderWidth:1,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#FF0000',
        opacity: 0.8,
        borderRadius: 5,
        marginRight: 15,
        borderColor:"#6C63FF"
      },
      itemText: {
        maxWidth: '80%',
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
    

})