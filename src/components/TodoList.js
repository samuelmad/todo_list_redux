import React from 'react'
import TodoItem from './TodoItem'

export default (props) =>  (
  <div className="Todo-List">
    <ul>
      {props.todos.map( todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
)
