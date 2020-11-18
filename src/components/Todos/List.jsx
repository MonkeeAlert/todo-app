import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './Item'

function TodoList({todos}) {

  return (
    <ul className="list todo__list">
      {
        todos.map( 
          t => {
            const { title, id, isPaused, countdownAsMs, countdownAsString } = t;

            return(
              <TodoItem 
                title={title} 
                key={id} 
                id={id} 
                isPaused={isPaused ? isPaused : true} 
                countdownAsMs={countdownAsMs ? countdownAsMs : 0 } 
                countdownAsString={countdownAsString ? countdownAsString : '00:00:00:00'}
              />
            )
          }
        )
      }
    </ul>
  )
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList)
