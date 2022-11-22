import { useRef } from "react";
import { UsernameFormElement } from "../model/todos.model";


interface NewTodos {
	add : (todoText: string) => void;
}

const NewTodos : React.FC<NewTodos> = (props) => {
	const inputRef = useRef(null)
	const todoSubmitHandler = (event: React.FormEvent<UsernameFormElement>) => {
		event.preventDefault();
		const enteredText  = event.currentTarget.todotext.value;
		props.add(enteredText);
	  };

	return (    
	<form className="form-control" onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todotext" ref={inputRef}  />
        </div>
        <button type="submit">ADD TODO</button>
      </form> 
	  );
}
 
export default NewTodos;