import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({

    container:{}

})