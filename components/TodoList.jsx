import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import {StatusBar as AndroidStatusBar} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import ListItem from './ListItem'; 
import Touchables from './Touchables';
import AddItem from './AddItem';
import Header from './Header';
const TodoList = (() =>{
    const [tasks, updateTasks] = useState(
        [
            {id: 0, task: 'hello'}
        ]);
    const [currentID, updateCurrentID] = useState(1);
    const taskList = tasks.map((item, index)=>{
        return <ListItem 
            key={item.id} 
            item={item.task} 
            deleteItem={()=>{deleteItem(index)}}
            updateItem={(item) => {updateItem(index, item)}}
            />;
    });
    const addItem = ((item) => {
        const newTasks = tasks.slice();
        newTasks.push({id: currentID, task: item});
        updateCurrentID(currentID + 1);
        updateTasks(newTasks);
    });
    const updateItem=((index, item) => {
        const newTasks = tasks.slice();
        newTasks[index].task = item;
        updateTasks(newTasks);
    })
    const deleteItem = ((index) => {
        const newTasks = tasks.slice();
        newTasks.splice(index, 1);
        updateTasks(newTasks);
    });
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="always">
                {taskList}
            </ScrollView>
            <AddItem addItem={addItem}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      flex: 1,
    },
  });

export default TodoList;