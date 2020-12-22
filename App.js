import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
        <Text>Header</Text>
        <Text>Header</Text>
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
        <Text>Footer</Text>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header: {
    padding:20,
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 100,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 5,
    // backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    padding:20,
    borderTopColor: '#333333',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
