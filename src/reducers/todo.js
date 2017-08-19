import {getTodos} from '../lib/todoServices'
const initialState = {
  todos: [],
  currentTodo: ''
}
//ACTIONS TYPES
const TODO_ADD = 'TODO_ADD'
const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
//ACTIONS
export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos:[...state.todos, action.payload]}
    case TODOS_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}

//ACTIONS CREATORS
export const updateCurrent = (val) => (
  {type: 'CURRENT_UPDATE',
  payload: val}
);

export const loadTodos = (todos) => ({type:TODOS_LOAD, payload: todos})

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then(todos => dispatch(loadTodos(todos)))
  }
}
