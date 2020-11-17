import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './Item'

function TodoList({todos}) {
  return (
    <ul>
      {
        todos.map( 
          t => <TodoItem title={t.title} key={t.id} id={t.id} />
        )
      }
    </ul>
  )
}

const mapStateToProps = state => ({ todos: state.todos});

export default connect(mapStateToProps)(TodoList)
