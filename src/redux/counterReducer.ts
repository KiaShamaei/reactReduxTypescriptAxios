
import { Reducer} from 'redux';
import { Action } from './counterAction';
import { ActionType } from './type/actiontType';

export interface CounterState {
	readonly isLoading: boolean;
	readonly errorMessage: string;
	readonly count: number;
  }
  
  export interface State {
	readonly counter: CounterState;
  }
  
  const initialState: CounterState = {
	isLoading: false,
	errorMessage: '',
	count: 0,
  };
  export const reducer: Reducer<State['counter'], Action> = (
	state = initialState,
	action
	
  ) => {
	switch (action.type) {
	  
	  case ActionType.decrement:
		return {
		  ...state,
		  count: state.count - 1
		};
		case ActionType.increment:
			return{
				...state, 
				count: state.count + 1
			}
	  default:
		return state;
	}
  };