import { useState } from "react";

function Form({onAddPatient}) {
    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    if (nombre && apellido) {
        onAddPatient({nombre,apellido})
        setNombre("");
        setApellido("");
    }
};
return (
    <form onSubmit={handleSubmit}>
        <input required="" type="text" placeholder="Ingrese su nombre" autocomplete="off" class="input" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        <input required="" type="text" placeholder="Ingrese su apellido" autocomplete="off" class="input" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        <button type="submit">Agregar Paciente</button>

    </form>
)

}

export default Form;