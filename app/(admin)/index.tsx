import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={{ gap: 5, flexDirection: "row", padding: 12, flexWrap : 'wrap' }}>
      {
        [1,2,3,4,5,6]?.map((menu) => (
            <TouchableOpacity
            
            key={menu}
        style={{
          justifyContent: "center",
          borderWidth: 1,
          width : '24%',
          borderColor: "#aaa",
          padding: 6,
          height: 100,
          borderRadius: 4,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "semibold",
            }}
          >
            Analytics
          </Text>
        </View>
      </TouchableOpacity>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
