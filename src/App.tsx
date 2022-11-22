import React from 'react';
import './App.css';
import TodoListContainer from './component/TodoListContainer';
import { Store, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as counterReducer } from './redux/counterReducer';


const store: Store = createStore(counterReducer);

const App : React.FC = ()=>(
	<Provider store={store}>
     <TodoListContainer/>
	</Provider>	

)
export default App;
