import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Linking from 'expo-linking';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Audio } from "expo-av";

// const URL_AUDIO_STREAM = "https://radio.dekpo.com/stream.mp3";

const URL_AUDIO_STREAM = "https://commealaradio.out.airtime.pro/commealaradio_a";

const backImage = require("./assets/img/45-tours.jpg");

const backColors = ["orange", "red", "green", "blue"];

const randomColor = backColors[Math.round(Math.random() * (backColors.length - 1))];

const homeLink = () => {
    Linking.openURL('https://commealaradio.com');
  }

const callLink = () => {
    Linking.openURL('tel:+33450238500');
  }

const instaLink = () => {
    Linking.openURL('https://www.instagram.com/comme.a.la.radio');
  }

const mailLink = () => {
    Linking.openURL('mailto:contact@commealaradio.com');
  }



export default function App() {
  
  const [sound, setSound] = React.useState(null);

  async function playSound() {
      if (sound === null) {
        setSound(false);
          console.log("Loading Sound");
          const { sound } = await Audio.Sound.createAsync({
            uri: URL_AUDIO_STREAM,
          });
          setSound(sound);
          console.log("Playing Sound");
          await sound.playAsync();
      } else {
        setSound(null);
          console.log("Stopping Sound");
          await sound.stopAsync();
          await sound.unloadAsync();   
      }
  }

  let [fontsLoaded] = useFonts({
    Chrismas_bell: require("./assets/font/Christmas-Bell-Personal-Use.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <TouchableOpacity onPress={homeLink}>
        <Ionicons name="home" size={30} color="#FFFFFF" />
      </TouchableOpacity>
        <Text style={styles.title}> My WebRadio </Text>
      <TouchableOpacity onPress={homeLink}>
        <Ionicons name="person" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      </View>

      <ImageBackground source={backImage} style={styles.content}>

        <TouchableOpacity onPress={playSound}>
          <Ionicons
            name={sound === null ? "play-circle" : "pause-circle"}
            size={200}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        
      </ImageBackground>

      <View style={styles.footer}>
      <TouchableOpacity onPress={callLink}>
        <Ionicons name="call" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={instaLink}>
        <Ionicons name="logo-instagram" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mailLink}>
        <Ionicons name="mail" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Chrismas_bell",
    fontSize: 40,
    marginTop: 10,
    color: "#FFFFFF",
    shadowColor: "#777777",
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 3,
    flexDirection: "row",
    height: 100,
    backgroundColor: randomColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 20,
    borderTopColor: "#FFFFFF",
    borderTopWidth: 3,
    flexDirection: "row",
    height: 80,
    backgroundColor: randomColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
