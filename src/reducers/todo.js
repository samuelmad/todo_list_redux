const initialState = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: false},
  ],
  currentTodo: ''
}
//ACTIONS TYPES
const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
//ACTIONS
export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos:[...state.todos, action.payload]}
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
