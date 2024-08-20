import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);


    const handleSubmit = (e) => {
      
        e.preventDefault();
        if (!value) {
          setError('Please enter a task!');
          setShake(true); 
          setTimeout(() => setShake(false), 500);
          
        }
        else{
          setError('');
          addTodo(value);
          setValue('');
          setShake(false);
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">

    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter the Task Here !' />
    <button type="submit" className='todo-btn'>ENTER</button>
    {error && <p className={`error-message ${shake ? 'shake' : ''}`}>{error}</p>}
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  </form>
  )
}