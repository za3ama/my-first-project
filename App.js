import React, {useState} from 'react';
import {View,Alert,StyleSheet,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items,setItems]= useState([
    {id:uuidv4(),text: 'milk'},
    {id:uuidv4(),text:'eggs'},
    {id:uuidv4(),text:'bread'},
    {id:uuidv4(),text:'juice'}
  ])

  const deleteItem = (id)=> {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  const addItem = (text) =>{
    if(!text){
      Alert.alert("Error","Please enter an item")
    }
    else{
    setItems(prevItems=> {
      return [{id: uuidv4(),text},...prevItems];
    });
  }
  }
  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item})=>(<ListItem item={item}
      deleteItem={deleteItem}/>) }/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
 
    
  }
})
export default App;