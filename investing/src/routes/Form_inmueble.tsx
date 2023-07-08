"use client";
import '../components/containers/container-ventas.css'
import Input_text from '@/components/form/input_text';
import Boton from '@/components/form/primary_button';

  function hola(){
    alert("hola mundo")
  }


export default function Ventas(){
  return (
    <div className="Container">
      <div className='titulos'>
        <h1>Welcome DANIEL MARTINEZ</h1>
        <h2>Do you wanna invest with us?</h2>
      </div>
      <div className="col">
      <div className="Form-ventas">
          <label>Complete Name</label>
          <Input_text  type={"text"} id={"name"}/>
          <label>Country/City</label>
          <Input_text  type={"text"} id={"country"}/>
          <label>Email</label>
          <Input_text  type={"text"} id={"email"}/>
          <label>how much do you want to invest?</label>
          <Input_text  type={"text"} id={"invest"}/>
          <label>Cellphone Number</label>
          <Input_text  type={"text"} id={"phone"}/>
          <Boton texto={"Confirmar"} callBack= {hola}/>
      </div>
      <br />
      <div className="Form-ventas">
      <label>Complete Name</label>
          <Input_text  type={"text"} id={"name"}/>
          <label>Country/City</label>
          <Input_text  type={"text"} id={"email"}/>
          <label>Email</label>
          <Input_text  type={"text"} id={"birthday"}/>
          <label>how much do you want to invest?</label>
          <Input_text  type={"text"} id={"phone"}/>
          <label>Cellphone Number</label>
          <Input_text  type={"text"} id={"phone"}/>
          <Boton texto={"Confirmar"} callBack= {hola}/>

      </div>
      </div>
    </div>
  )
}