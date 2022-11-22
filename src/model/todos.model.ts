export interface Todos {
	id: string;
	text: string;
  }


  export interface FormElements extends HTMLFormControlsCollection {
	todotext: HTMLInputElement
}
export interface UsernameFormElement extends HTMLFormElement {
readonly elements: FormElements
}