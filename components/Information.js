import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Colors from "../constant/Color";

const Information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/image.jpg")} style={styles.image} />
      </View>
      <Text style={styles.songName}>Withoout Me</Text>
      <Text style={styles.artistName}>Halsey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: "center",
  },

  imageContainer: {
    marginTop: 100,
    width: 300,
    height: 400,
  },

  image: {
      width: 300,
      height: 350,
      borderRadius: 15
  },

  songName: {
    fontSize: 18,
    color: "white",
  },

  artistName: {
    fontSize: 16,
    color: "white",
  },
});

export default Information;
