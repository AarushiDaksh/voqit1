import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomHeader({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate("Search")}
        activeOpacity={0.7}
      >
        <Ionicons name="search" size={20} color="gray" style={{ marginRight: 10 }} />
        <TextInput
          placeholder="Search Products"
          placeholderTextColor="gray"
          style={styles.input}
          onFocus={() => navigation.navigate("Search")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate("Scan")}>
        <Ionicons name="scan-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "gray",
  },
  scanButton: {
    marginLeft: 15,
  },
};
