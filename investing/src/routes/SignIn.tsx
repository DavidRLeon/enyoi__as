"use client";
import React from "react";
import '@/components/containers/form.css'
import Input_Text from "@/components/form/input_text";
import Boton from "@/components/form/primary_button";
import Image from "next/image";
import invest from "@/components/assets/img/invest.png"

function hola(){
  alert("hola mundo")
}

export default function SignIn() {
  return (
    <div className="container">
      <Image src={invest} alt={"logo_invest"} className="image"/>
      <div className="form">
          <h1>Sign In</h1>
          <label>User</label>
          <Input_Text  type={"text"} id={"user"}/>
          <label>Password</label>
          <Input_Text  type={"text"} id={"password"}/>
          <Boton texto={"Login"} callBack={hola}/>
      </div>
    </div>
  );
}