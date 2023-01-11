import './App.css';
import Form from "./Components/Form";
import DisplayList from './Components/DisplayList';
import React, { useState } from "react";

function App() {


  const [toDoList, setToDoList] = useState([]);

  const addToList = (record) => {
    const newToDoItem = {
      text: record,
      complete: false,
      }

      console.log(newToDoItem)
    setToDoList([...toDoList, newToDoItem]);
  };


  const updateList = (updatedValue) => {
    const updatedList = toDoList.map((item, i) => {
      if (updatedValue === i) {
        item.complete = !item.complete;
      }
      return item;
    })
    setToDoList(updatedList);
  };


  // filterValue is the value that we determined in DisplayList
  const deleteListItem = (filterValue) => {
    const filteredList = toDoList.filter((toDo, i) => { 
      console.log(toDo);
      console.log(filterValue);
        return toDo.text !== filterValue;
    });
    setToDoList(filteredList);
  };


  return (
    <div className="App">
      <Form addToList = {addToList}/>

      <DisplayList 
        list = {toDoList} 
        deleteListItem = {deleteListItem}
        updateList = {updateList}
        // updateList = {updateList}
      />
    </div>
  );
}

export default App;
