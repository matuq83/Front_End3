import { useState } from 'react'
import Form from "./Form"
import Turnos from "./Turnos"
import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([]);

  const addPatient = (patient) =>{
      setPacientes([...pacientes,patient]) 
  }
  return (
    <div>
      <h1>Registro de Turnos</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>
    </div>
  )
}

export default App
