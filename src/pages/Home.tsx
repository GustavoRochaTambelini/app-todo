import React, { Fragment, useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
   const [tasks, setTasks] = useState<Task[]>([]);
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState); 


  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle.trim() != ''){    
      const dataTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks(oldTask => [...oldTask, dataTask]);
    }
    
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists   
    let data : Task[];
    data = tasks;

    for (var i = 0; i < data.length ; i++) {
        if(data[i].id == id){
          data[i].done = !data[i].done;
          break;
        }   
    }   

    setTasks([...data]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldTask => oldTask.filter(
      task => task.id != id
    ));
  }

  return (
    <View style={{flex:1,backgroundColor:isEnabled ? "#191D3A" : '#FFFFFF'}}>
      <Header isEnabled={isEnabled} onValueChange={toggleSwitch}/>

      <TodoInput addTask={handleAddTask} isEnabled={isEnabled} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        isEnabled={isEnabled} 
      />
    </View>
  )
}