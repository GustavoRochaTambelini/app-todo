import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isEnabled: boolean;
}

export function TodoInput({ addTask, isEnabled }: TodoInputProps) {
   const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,{backgroundColor:isEnabled ? "#413A6F" : '#F5F4F8'}]}>
      <TextInput 
        style={[styles.input,{backgroundColor:isEnabled ? '#413A6F' : '#F5F4F8', color:isEnabled ? '#E1E1E6' : '#3D3D4D'}]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={isEnabled ? '#E1E1E6' : '#A09CB1'}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing ={()=>{
          addTask(task);
          handleAddNewTask();
        }}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton,{backgroundColor:isEnabled ? '#9347CA' : '#3FAD27'}]}
        onPress={()=>{
          addTask(task);
          handleAddNewTask();
        }}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});