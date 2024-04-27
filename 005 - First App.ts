import axios from 'axios';

// -- with errors
// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// axios.get(url).then(response =>{
//     const todo = response.data
//     const ID = todo.ID
//     const title = todo.Title
//     const finsihed = todo.finsihed
//     console.log(`
//         The todo with ID: ${ID}
//         has a title of: ${title}
//         is it finsiehed?: ${finsihed}
//     `);
// })  


// -- using interface to avoid errors
// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interface Todo {
//     id: number;
//     title: string;
//     completed: Boolean
// }

// axios.get(url).then(response => {
//     const todo = response.data as Todo
//     const ID = todo.id
//     const title = todo.title
//     const completed = todo.completed
//     console.log(`
//         The todo with ID: ${ID}
//         has a title of: ${title}
//         is it finsiehed?: ${completed}
//     `);
// })  


const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: Boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo
    const ID = todo.id
    const title = todo.title
    const completed = todo.completed
    console.log(`
        The todo with ID: ${ID}
        has a title of: ${title}
        is it finsiehed?: ${completed}
    `);
})  