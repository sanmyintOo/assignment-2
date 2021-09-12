import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageView } from "react-native";

import Color from './constant/Color';

import BottomBar from "./components/BottomBar";
import PlayArea from "./components/PlayArea";
import Information from "./components/Information";

export default function App() {
  return (
    <View style={styles.container}>
      <Information/>
      <PlayArea />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    justifyContent: "space-between",
  },
});
