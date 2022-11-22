
import { Action as AnyAction} from 'redux';
import { ActionType } from './type/actiontType';


export type Meta = null | { [key: string]: any };

export interface FSA<Type extends string, Payload = null> extends AnyAction {
  type: Type;
  payload?: Payload;
  error?: boolean;
  meta?: Meta;
}
export type Action = FSA<ActionType.increment> | FSA<ActionType.decrement>;

export const  increment = (): Action => {
	return { type: ActionType.increment };
  };
  export const decrement = (): Action => {
	return { type: ActionType.decrement };
  };