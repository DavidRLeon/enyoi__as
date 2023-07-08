"use client";
import React from "react";
import '../components/containers/form.css'
import Input_Text from "../components/form/input_text";
import Boton from "../components/form/primary_button";
import primary_button from "../components/form/primary_button";
import Image from "next/image";
import invest from "../components/assets/img/invest.png"

function hola(){
  alert("hola mundo")
}

export default function SignIn() {
  return (
    <div className="container">
      <Image src={invest} alt={"logo_invest"} className="image"/>
      <div className="form">
          <h1>Recover Password</h1>
          <label>User</label>
          <Input_Text type={"text"} id={"user"}/>
          <label>Name</label>
          <Input_Text type={"text"} id={"name"}/>
          <label>Email</label>
          <Input_Text type={"text"} id={"email"}/>
          <Boton texto={"Send"} callBack={hola}/>
      </div>
    </div>
  );
}