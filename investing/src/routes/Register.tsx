"use client";
import React, { useState } from "react";
import axios from "axios";
import '../components/containers/form.css'
import Input_Text from "@/components/form/input_text";
import Boton from "@/components/form/primary_button";
import Image from "next/image";
import invest from "@/components/assets/img/invest.png"


  function Register() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [Phone_number, setPhone_number] = useState('')
    const [Password, setPassword] = useState('')
  
    const handleName = (e:string) => {
        setName(e)
    }
    const handleEmail = (e:string) => {
        setEmail(e)
    }
    const handleBirthday = (e:string) => {
        setBirthday(e)
    }
    const handlePhone_number = (e:string) => {
        setPhone_number(e)
    }
    const handlePassword = (e:string) => {
        setPassword(e)
    }
  
    const registrar = () =>{
  
        axios.post ("http://localhost:3001/Users",{
  
        Name: Name,
        Email: Email,
        Birthday: Birthday,
        Phone_number: Phone_number,
        Password: Password
        }).then ((response)=> {
            alert("Se ha registrado de forma correcta")
        })
  
    }
  
  return (
    <div className="container">
      <Image src={invest} alt={"logo_invest"} className="image"/>
      <div className="form">
          <h1>Register</h1>
          <label>Name</label>
          <Input_Text type={"text"} id={"name"} handleInput={handleName}/>
          <label>Email</label>
          <Input_Text type={"text"} id={"email"} handleInput={handleEmail}/>
          <label>Birthday</label>
          <Input_Text type={"text"} id={"birthday"} handleInput={handleBirthday}/>
          <label>Phone Number</label>
          <Input_Text type={"text"} id={"phone"} handleInput={handlePhone_number}/>
          <label>Password</label>
          <Input_Text type={"text"} id={"password"} handleInput={handlePassword}/>
          <Boton texto={"Register"} callBack={registrar}/>
      </div>
    </div>
  );
  }

  export default Register;
