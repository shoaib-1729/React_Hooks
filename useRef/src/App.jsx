import {useRef} from 'react';
import './App.css'
import Search from "./Search"

// Solution-01 (using javascript)
// Solution-02 (using useState)
// Solution-03 (using useRef)
// Solution-04 (using forwardRef function)

function App() {

  const inputRef = useRef('')


  // use ref
  // const inputRef = useRef('')

  function handleButton(){
    inputRef.current.focus();
  }


  return (
  <div className='App'>
      <h1>forwardRef</h1>
      <Search ref={inputRef} />
      <button onClick={handleButton}>Focus on Search</button>
    </div>
  )
}

export default App
