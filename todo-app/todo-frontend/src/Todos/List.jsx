/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import React from 'react'

import Todo from "./Todo"

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    // <>
    //   {todos.map(todo => 
    //     <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    //   ).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    // </>

    <>
      {todos.flatMap((todo, index) => [
        index > 0 && <hr key={`hr-${todo._id}`} />,
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      ])}
    </>
  )
}

export default TodoList
