import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import CheckBox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
const buttonSize = 25;
const StaticItem = ((props) => { //needs taskValue, toggleCheckBox, setToggleCheckBox, setEditMode
    return (
    <View style={styles.container}>
        <Text
            style={{
                flex: 1
                
            }}
        >
            {props.taskValue}
        </Text>
        <CheckBox
            disable={false}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
        />
        <TouchableOpacity
            onPress={() => {props.setEditMode(true)}}
        >
            <Icon 
                name='edit'
                color='black'
                size={buttonSize} 
            />
        </TouchableOpacity>
       


    </View>
    );
});

const EditItem = ((props) => { // needs taskValue, setTaskValue, setEditMode. deleteItem, propogate task value to history array
    
    const onSave = (() => {
        props.setEditMode(false);
        props.saveItem();
    });
    const textInput = React.createRef();

    useEffect(() => {
        textInput.current.focus();
    });
    return (
    <View style={styles.container}>
        <TextInput
            style={{
                flex: 1
            }}
            ref={textInput}
            value={props.taskValue}
            onChangeText={(e) => props.setTaskValue(e)}
        />
        <TouchableOpacity
            onPress={onSave}
        >
            <Icon 
                name='check'
                color='green'
                size={buttonSize} 
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={props.deleteItem}
        >
            <Icon 
                name="close"
                color="red"
                size={buttonSize}
            />
        </TouchableOpacity>

    </View>
    );
});

const ListItem = ((props) => { // props are item, deleteItem
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [taskValue, setTaskValue] = useState(props.item); // MAKE SURE TO LINK TO PROP LATER WHEN UPDATED
    const [editMode, setEditMode] = useState(false);

    const saveItem = (() => {
        props.updateItem(taskValue);
    })

    if (!editMode){
        return (
            <StaticItem
                taskValue={taskValue}
                toggleCheckBox={toggleCheckBox}
                setToggleCheckBox={setToggleCheckBox}
                setEditMode={setEditMode}
            />
        );
    } else {
        return (
            <EditItem
                taskValue={taskValue}
                setTaskValue={setTaskValue}
                setEditMode={setEditMode}
                deleteItem={props.deleteItem}
                saveItem={saveItem}
            />
        );
    }
});

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: '100%',
        padding: 5
    },
});

export default ListItem;