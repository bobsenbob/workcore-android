import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Icon from 'react-native-vector-icons/AntDesign'

const AddItem = ((props) =>{
    const [text, changeText] = useState('');
    function onPressButton(){
        console.log('you pressed');
        props.addItem(text);
        changeText('');
    }
    return (
        <View style={{
            addingTop: 60,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'green'

        }} >
            <TextInput
            style={{
                margin: 5,
                marginRight: 2.5,
                flex: 5,
                borderWidth: 1,
                backgroundColor: 'white',
            }}
            onChangeText={changeText}
            value={text}
            />
            <TouchableOpacity  
            style={{
                margin: 5,
                marginLeft: 2.5,
                flexDirection: 'row',
            }}
            onPress={() => onPressButton()} 
            underlayColor="white"
            >
                <Icon 
                    name='pluscircleo'
                    size={40}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        flex: 1,
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
  });

export default AddItem;