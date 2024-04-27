import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: Boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo
    const id = todo.id
    const title = todo.title
    const completed = todo.completed
    logTodo(id, title, completed)
})  

const logTodo = (id: number, title: string, completed: Boolean) => {
    console.log(`
    The todo with ID: ${id}
    has a title of: ${title}
    is it finsiehed?: ${completed}
`);
}