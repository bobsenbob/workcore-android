import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Header = ((props) =>{
    const navigation=useNavigation();
    return (
        <View style = {styles.container}>
            <Text>Welcome David!</Text>
            <TouchableOpacity>
                <Icon
                    name='menu'
                    size={40}
                    color='white'
                    // onPress={()=>{navigation.toggleDrawer}}
                />
            </TouchableOpacity>
        </View>
    );
});
const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 5,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
export default Header;