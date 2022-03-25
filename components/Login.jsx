import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const Login = ((props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const onLogin=(() => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // console.log(auth.currentUser);
                Alert.alert(
                    "sign in",
                    "Successfully Signed In!"
                )
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    "not sign in",
                    "Something Went Wrong Log In"
                )
            });
    });
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
                title='Log In'
                onPress={onLogin}
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
export default Login;