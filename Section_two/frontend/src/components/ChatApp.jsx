import React, { useState } from 'react'

const ChatApp = () => {


    const [todolist, setTodoList] = useState([]);

    const addTodo = (e) => {
        // console.log(e.code);
        if (e.code === 'Enter') {
           // console.log('Task Added');
            let task = e.target.value;
            if (!task.trim()) return;

            e.target.value = "";
            setTodoList([...todolist, { task: task, completed: false }]);
          //  console.log(todolist);
        }
        
    };
    const CompleteTodo = (index) => {
        const temp = todolist;
        temp[index].completed = true;
        setTodoList([...temp]);
    }

    const deleteTodo = (index) => {
        const temp = todolist;
        temp.splice(index, 1);
        setTodoList([...temp]);
    };
     
    return (
        <div>
            <h1 className='text-center display-4 fw-bold my-5'>Todo App</h1>
            <div className='container'>
                <div className="card">
                    
                    <div className="card-body">
                        <ul className='list-group'>
                            {
                                todolist.map((todo, index) => (
                                    <li className='list-group-item'>
                                        <h3>{todo.task}</h3>
                                        <input type="checkbox" />
                                        <button className={`ms-3 btn ${todo.completed ? 'btn-success' : 'btn-warning'}`} onClick={() => { CompleteTodo(index) }}> {todo.completed ? "Completed" : "Pending"} </button>
                                        <button className='ms-3 btn btn-warning' onClick={() => { deleteTodo(index); }} > Delete</button>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className="card-header">
                        <input className='form-control' type="text" onKeyDown={addTodo} />
                    </div>

                </div>

            </div>
        </div >


    )
}

export default ChatApp