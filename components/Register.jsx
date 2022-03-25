import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const Register = ((props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const onRegister=()=> {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert(
                    "registered",
                    "Successfully Registered!"
                )
            })
            .catch((error) => {
                console.log(email);
                //console.log(error);
                Alert.alert(
                    "not registered",
                    "Something Went Wrong..."
                )
                
            });
    };
    return (
        <View style = {styles.container}>
            <View style = {{
                justifyContent: 'space-evenly',
                height: '60%',
            }}>
                <View>
                    <Text>Email: </Text>
                    <TextInput
                        style={{
                            width: 200,
                            borderWidth: 1,
                            padding: 5,
                        }}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text>Password: </Text>
                    <TextInput
                        style={{
                            width: 200,
                            borderWidth: 1,
                            padding: 5,
                        }}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Button 
                title='Register'
                onPress={onRegister}
                />
            </View>

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
});
export default Register;