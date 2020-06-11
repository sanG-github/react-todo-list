import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import './App.css'
import checkAll from './checkAll.svg'

class App extends Component{
  constructor(){
    super();
    this.state = {
      todoList: [
        {content:'Go to school', isComplete: true},
        {content:'Go back home', isComplete: false},
        {content:'Go to eat', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.checkAllItem = this.checkAllItem.bind(this);
  }

  onItemClick(index, item){
    return () => {
      const {isComplete} = item;
      this.setState({
        todoList: [
          ...this.state.todoList.slice(0, index),
          {content: item.content, isComplete: !isComplete},
          ...this.state.todoList.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){
      const text = event.target.value;
      this.setState({
        todoList: [
          {content: text, isComplete: false},
          ...this.state.todoList
        ]
      });

      event.target.value = '';
    }
  }

  checkAllItem(){
    const newTodo = this.state.todoList;
    const boolCheck = newTodo[0].isComplete;
    for(const item of newTodo){
      item.isComplete = !boolCheck;
    }

    this.setState({
      todoList: newTodo
    });
  }

  render(){
    const {todoList} = this.state;
    return(
      <div className="App">
        <div className="Heading">
          <img src={checkAll} className="checkAll" onClick={this.checkAllItem}/>
          <input 
            type="text" 
            className="input"
            placeholder="Add new activity" 
            onKeyUp={this.onKeyUp}/>
        </div>
        
        {
          todoList.length > 0 && todoList.map((item, index) => 
          <TodoItem 
            key={index}
            index={index} 
            item={item} 
            onClick={this.onItemClick(index, item)}/>)
        }
      </div>
    );
  } 
}

export default App;
