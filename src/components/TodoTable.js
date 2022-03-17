import React from 'react';

export default function TodoTable({todos, deleteTodo}) {
    return(
        <div>
          <table>
           <tbody>
            <tr><th>Date</th><th>Description</th></tr>
            {
              todos.map((todo, index) => 
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.description}</td>
                  <td><button id={index} onClick={() => deleteTodo(index)}>Delete</button></td>
                </tr>)
            }
           </tbody>
         </table>
        </div>
    );
} 