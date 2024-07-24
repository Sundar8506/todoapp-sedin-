import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        if (value) {
          
          addTodo(value);
        
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter the Task Here !' />
    <button type="submit" className='todo-btn'>Submit</button>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  </form>
  )
}