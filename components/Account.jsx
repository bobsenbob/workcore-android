import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native'; 
import {getAuth, signOut} from 'firebase/auth';
const Account = ((props) => {
    const auth = getAuth();
    const handleSignOut = (() => {
        signOut(auth)
            .then(() => {
                Alert.alert('signed out');
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('sign out error');
            });
    });
    return (
        <View>
            <Button
                title='Sign Out'
                onPress={handleSignOut}
            />
        </View>
    );
});

export default Account;