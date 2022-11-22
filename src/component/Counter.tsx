
import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterAction';
import { CounterState } from './../redux/counterReducer';
import { decrement } from './../redux/counterAction';
import { useSelector } from 'react-redux';


interface IProps {
	title : string
}


const Counter : React.FC<IProps> = (props) => {
	const dispatch = useDispatch()
	const add =()=>{
		dispatch(increment());
	}
	const dec =()=>{
		console.log("hi")
		dispatch(decrement());
	}
	const counter = (state: CounterState) => state.count;
	const count = useSelector(counter)
  return (
	<>
		<div>{props.title}</div>
		<div>this is count :{count}</div>
	    <button onClick={add} >add</button>
		<button onClick={dec} > dec</button>
	</>


  )
}
export default Counter;