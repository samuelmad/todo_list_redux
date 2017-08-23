const  url = 'http://localhost:8080/todos'

export const getTodos = () => {
  return fetch(url).then(res => res.json())
}

export const createTodo = (name) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
  .then(res => res.json())
}

export const updateTodo = (todo) => {
  return fetch(`${url}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  .then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
