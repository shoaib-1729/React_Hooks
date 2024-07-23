import { useReducer } from 'react'
import './App.css'

const InitialState={
  fName: '',
  age: '',
  phone: ''
}
// reducer function
function reducerFunction(state, action){
  // state -> prevState, action -> nextState
  // basically, redux style ko mimic karne ki koshish kar rahe hai hum
  const {type, payload} = action;

  switch(type){
    case 'FNAME':{
      return {...state, fName: payload}
    }

    case 'AGE':{
      return {...state, age: payload}
    }

    case 'PHONE':{
      return {...state, phone: payload}
    }
    default:
      return state;

  }
}
function App() {
  // use reducer hook
  const [form, dispatch] = useReducer(reducerFunction, InitialState)
  // const [myName, setMyName] = useState("")
  // const [myAge, setMyAge] = useState("")
  // const [myNumber, setMyNumber] = useState("")


  // handler functions to set the state of input elements
  function handleName(e){
    //  set the state to the value provided in input
    dispatch({type: "FNAME", payload: e.target.value})
  }

  function handleAge(e){
    //  set the state to the value provided in input
    dispatch({type: "AGE", payload: e.target.value})

  }

  function handleNumber(e){
    // set the state to the value provided in input
    dispatch({type: "PHONE", payload: e.target.value})
  }

  // form submit
  function handleFormSubmit(e){
    e.preventDefault();
    console.log("Data Submitted:", {form})
  }

  return (
    <div>
      <h1>useReducer Hook: </h1>
      <form
      onSubmit={handleFormSubmit}
      action="">
        <label htmlFor="Name">Name:</label>
        <input
        value={form.fName}
        onChange={handleName}
        placeholder='Enter First Name'
        type="text"
        id="Name"
        aria-label="Name"/>

        <label htmlFor="Age">Age:</label>
        <input
        value={form.age}
        onChange={handleAge}
        placeholder='Enter Age'
        type="text"
        id="Age"
        aria-label="Age"/>

        <label htmlFor="Number">Phone:</label>
        <input
        value={form.phone}
        onChange={handleNumber}
        placeholder='Enter Phone Number'
        type="text"
        id="Number"
        aria-label="Number"
        />

       <button>Submit</button>
      </form>
    </div>
  )
}

export default App
