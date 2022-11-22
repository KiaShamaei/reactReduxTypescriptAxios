

import { link } from 'fs';
import React from 'react';
import '../css/todoList.css'


interface TodoListProps {
	items: {id: string, text: string}[];
	delete : (id :string)=>void
  };

const TodoList :React.FC<TodoListProps>  = (props) => {

	return(
		<ul>
			{props.items.map(e=><li key={e.id} ><span>{e.text}</span> <button onClick={()=>props.delete(e.id)}>#</button></li>)}
		</ul>
	)

}
 
export default TodoList ;