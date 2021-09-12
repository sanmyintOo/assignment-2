import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Colors from "../constant/Color";

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <AntDesign name="hearto" size={24} color="grey" />
      </Pressable>
      <Pressable>
        <Ionicons name="shuffle" size={30} color="grey" />
      </Pressable>
      <Pressable>
        <Feather name="external-link" size={24} color="grey" />
      </Pressable>
      <Pressable>
        <Feather name="more-horizontal" size={24} color="grey" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#625a51",
  },

  text: {
    color: "white",
  },
});

export default BottomBar;
