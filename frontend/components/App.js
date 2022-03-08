import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id='error'>Error: No error here</div>
        <div id='todos'>
          <h2>Todos:</h2>
          <div>Walk the dog</div>
          <div>Learn React</div>
        </div>
        <form id='todoForm'>
          <input type='text' placeholder='Type todo' />
          <input type='submit'></input>
          <button>Hide Completed</button>
        </form>
      </div>
    )
  }
}
