import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import binIcon from "../../assets/images/icons/recycling-bin.png";

const Layout = () => {
  const [garbageList, setGarbageList] = useState([])
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#15F5BA",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#373737",
          paddingVertical: 6,
          height: 72,
        },
      }}
    >
      <Tabs.Screen
        name="drop-trash"
        initialParams={{garbageList, setGarbageList}}
        options={{
          headerShown: true,
          headerTitle: "Drop Trash",
          headerTitleStyle : {
            color : 'white'
          },
          headerStyle: {
            backgroundColor: "#100F0F",
            borderBottomWidth: 1,
            borderBottomColor : '#474747',
          },
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center", rowGap: 3 }}>
              <Octicons name="trash" size={24} color={color} />
              <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
                Drop
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        initialParams={{garbageList, setGarbageList}}
        options={{
          headerShown: true,
          headerTitle: "Garbage List",
          headerTitleStyle : {
            color : 'white'
          },
          headerStyle: {
            backgroundColor: "#100F0F",
            borderBottomWidth: 1,
            borderBottomColor : '#474747',
          },
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Octicons name="list-unordered" size={24} color={color} />
              <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
                List
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default Layout;
