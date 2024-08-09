import { StatusBar } from "expo-status-bar";
import { Box, Button, Center, Input } from "native-base";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import { Modal } from "native-base";
import { useToast } from 'native-base';

const DropTrash = () => {
const toast = useToast()
  const [image, setImage] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setShowModal(true)
      setImage(result.assets[0].uri);
    }
  };

  const saveGarbageDropData = () => {
    setShowModal(false);
    toast.show({
      description: "Garbage Dropped!",
      placement : 'top'
    })
  }
  return (
    <View style={{ backgroundColor: "#100F0F", flex: 1,  alignItems : 'center', justifyContent : 'center'}}>
      <SafeAreaView>
        <TouchableOpacity onPress={pickImage}>
        <View
          style={{ padding: 24, borderRadius: 60, width: 120, height: 120, alignItems : 'center', justifyContent : 'center', backgroundColor : '#13dda7'}}
        >
            <View style={{ backgroundColor : '#15F5BA', width: 80, height: 80, borderRadius: 40, alignItems :'center', justifyContent : 'center', shadowColor : 'rgba(0,0,0,0.5)',}}>

          <Text style={{ fontSize: 16, color : 'white', fontWeight : 700}}>DROP</Text>
            </View>
        </View>
        </TouchableOpacity>
        
        <Modal  isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={{backgroundColor : '#373737',}} maxWidth="80%">
          
          <Center>
          <Modal.Body>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <View style={{marginTop : 6}}>
            <Text style={{fontSize : 20, marginBottom : 12, color: 'white'}}>Date : {new Date().toDateString()}</Text>
          <Input style={{color : 'white'}} type="text" placeholder="comment"/>
          </View>
          </Modal.Body>
          </Center>
          <Modal.Footer style={{backgroundColor : '#474747',}}>
            <Button.Group space={2}>
              <Button variant="solid" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button style={{backgroundColor : '#15F5BA',}} variant={'solid'}  onPress={saveGarbageDropData}>
                <Text style={{fontWeight : 600}}>Drop Garbage</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
  },
});

export default DropTrash;
