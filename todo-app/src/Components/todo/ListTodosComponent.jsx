import React, { useState } from 'react';

const ListTodosComponent = () => {

    const todos = [
        {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
        {id: 2, description: 'Preapare for Interview', done: false, targetDate: new Date()},
        {id: 3, description: 'Excel in Job', done: false, targetDate: new Date()},
    ]; 

    const[state] = useState(todos);

    return (
        <>
            <h1>List Todos</h1>
            <br />
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed ?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        state.map( (todo) => 
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                        
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListTodosComponent;
