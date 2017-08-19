const  url = 'http://localhost:8080/todos'
export const getTodos = () => {
  return fetch(url).then(res => res.json())
}
