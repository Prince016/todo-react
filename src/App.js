import React, { useState } from 'react'
import './App.css';
// import "../bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [newtask, setnewtask] = useState('');
  const [tasks, settasks] = useState([]);


  function addtask() {
    //  alert(newtask);
    // array , newelement (which you want to add in the array)
    settasks([...tasks, newtask])
  }

  function deletetask(index) {
    var duplicatearray = [ ...tasks ]
    duplicatearray.splice(index, 1);
    settasks(duplicatearray);
  }

  const taskslist = tasks.map((object, index) => {
    return <div className='row justify-content-center ' >
      <h1 className='col-md-8 text-left text m-3' >{index + 1}. {object}</h1>
      {/* we can't just write the name of function as we have to 
        pass the parameter so we use arrow function */}
      <button onClick={() => { deletetask(index) }} className='btn btn-danger col-md-1 m-2' >DELETE </button>
    </div>

  })





  return (
    <div className="App">
      <h1> React ToDo list</h1>

      <div className="row justify-content-center">

        <input type="text" placeholder='TaskName' className='form-control col-md-6 m-1 wid'
          value={newtask} onChange={(e) => { setnewtask(e.target.value) }}
        />
        <button onClick={addtask} className='btn btn-success col-md-1 m-2' >ADD TASK</button>
      </div>

      {taskslist}

    </div>
  );
}

export default App;
