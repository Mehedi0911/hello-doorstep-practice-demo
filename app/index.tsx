import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 28,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Hello{" "}
          <Text style={{ color: "#15F5BA", fontWeight: 600 }}>Doorstep</Text>
        </Text>
        <Pressable
          style={{ backgroundColor: "#15F5BA", marginTop: 12, borderRadius: 4 }}
        >
          <Link
            style={{
              color: "white",
              fontSize: 20,
              paddingVertical: 6,
              paddingHorizontal: 12,
              fontWeight: 600,
            }}
            href={"/(user)"}
          >
            <Text>User</Text>
          </Link>
        </Pressable>
        <Pressable
          style={{ backgroundColor: "#15F5BA", marginTop: 12, borderRadius: 4 }}
        >
          <Link
            style={{
              color: "white",
              fontSize: 20,
              paddingVertical: 6,
              paddingHorizontal: 12,
              fontWeight: 600,
            }}
            href={"/(user)"}
          >
            <Text>Manager</Text>
          </Link>
        </Pressable>
        <Pressable
          style={{ backgroundColor: "#15F5BA", marginTop: 12, borderRadius: 4 }}
        >
          <Link
            style={{
              color: "white",
              fontSize: 20,
              paddingVertical: 6,
              paddingHorizontal: 12,
              fontWeight: 600,
            }}
            href={"/(user)"}
          >
            <Text>Admin</Text>
          </Link>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0c0c",
    flex: 1,
    color: "white",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
