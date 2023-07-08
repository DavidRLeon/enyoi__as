"use client";
import React from "react";
import './css/input_text2.css'
function Input_text(props: {type: string, id: string}){
    return (
        <input type={props.type} id={props.id} className="input_text"/>
    )
}

export default Input_text