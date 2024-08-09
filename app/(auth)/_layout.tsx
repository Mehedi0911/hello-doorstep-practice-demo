import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <View>
            <Stack>
                <Stack.Screen name='sign-in'/>
                <Stack.Screen name='sign-up'/>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Layout;
