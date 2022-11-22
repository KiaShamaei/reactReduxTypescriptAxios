import { useState } from 'react';
import { Todos } from './../model/todos.model';
import NewTodos from './NewTodos';
import TodoList from './TodoList';




const TodoListContainer :React.FC = () => {

	const [todoList , setTodoList] = useState<Todos[]>([])
	console.log(todoList)
	const handleAdd= (e:string)=>{
			console.log(e);
			setTodoList([...todoList,{id:Math.random().toString() , text:e}])
			
		}
	const handleDelete = (id:string)=>{
		let cloneList = [...todoList];
		cloneList = cloneList.filter((m:Todos)=>{
			return m.id !== id;
		})
		setTodoList(cloneList)

	}
	return (
		<div className="App">
		  <NewTodos add={handleAdd} />
		  <TodoList items={todoList} delete={handleDelete}/>
		</div>
	)
}
 
export default TodoListContainer;