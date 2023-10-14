import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  search: {
    flex: 0.1,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
    padding: 10,
  },
  list: {
    flex: 1,
    padding: 10,
  },
});
