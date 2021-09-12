import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constant/Color";

const PlayArea = () => {
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 310}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#e5b640"
        maximumTrackTintColor="grey"
        thumbTintColor="#e5b640"
      />
      <View style={styles.songTimer}>
        <Text style={styles.text}>0:00</Text>
        <Text style={styles.text}>3:50</Text>
      </View>
      <View style={styles.actionContainer}>
        <Pressable>
          <Ionicons
            name="ios-play-skip-back-outline"
            size={35}
            color="#e5b640"
          />
        </Pressable>
        <Pressable>
          <AntDesign name="pausecircle" size={60} color="#e5b640" />
        </Pressable>
        <Pressable>
          <Ionicons
            name="play-skip-forward-outline"
            size={35}
            color="#e5b640"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    height: 150,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "white",
    marginHorizontal: 130,
  },

  songTimer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10
  },

  actionContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PlayArea;
