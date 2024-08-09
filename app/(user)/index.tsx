import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, FlatList } from "native-base";
import img from "../../assets/images/icons/recycling-bin.png";

const Item = ({ data }: any) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 6,
        marginBottom: 12,
        borderColor: "#aaa",
        flexDirection: "row",
        alignItems :'center',
        justifyContent: "space-between",
        columnGap: 12,
      }}
    >
      <View>
        <Image
          style={{ borderRadius: 12 }}
          source={{ uri: data.image }}
          height={128}
          width={128}
          alt="logo"
        />
      </View>
      <View>
        <Text style={{ color: "white", fontSize : 16, marginBottom : 12 }}>Date : {data.date}</Text>
        <Button>Claim Not Collected</Button>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ padding: 12, backgroundColor: "#100F0F", flex: 1 }}>
      <View>
        <FlatList
          scrollEnabled
          data={garbageData}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.date}
        />
      </View>
    </View>
  );
};

const garbageData = [
  {
    image: "https://picsum.photos/id/1/200/300",
    date: "09-08-2024",
    comment: "Collect carefully",
  },
  {
    image: "https://picsum.photos/id/2/200/300",
    date: "08-08-2024",
    comment: "Collect carefully",
  },
  {
    image: "https://picsum.photos/id/3/200/300",
    date: "07-08-2024",
    comment: "Collect carefully",
  },
  {
    image: "https://picsum.photos/id/4/200/300",
    date: "06-08-2024",
    comment: "Collect carefully",
  },
  {
    image: "https://picsum.photos/id/5/200/300",
    date: "05-08-2024",
    comment: "Collect carefully",
  },
];

const styles = StyleSheet.create({});

export default HomeScreen;
