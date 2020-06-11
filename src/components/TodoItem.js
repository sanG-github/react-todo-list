import React, {Component} from 'react';
import classNames from 'classnames'

import './TodoItem.css'
import tickTodo from './../tickTodo.svg'
import tickComplete from '../tickComplete.svg'

class TodoItem extends Component {
  render(){
    const {index, item, onClick} = this.props;
    const src = item.isComplete ? tickComplete : tickTodo;
    
    return(
        <div 
          onClick={onClick} 
          className={classNames('TodoItem', {
          'isComplete': item.isComplete,
          'first-child': index === 0
          })}>
            <img className="img" src={src}/>
            <p>{item.content}</p>
        </div>
    );
  }
}

export default TodoItem;
