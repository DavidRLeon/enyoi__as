"use client";
import React, { Fragment } from 'react';
import './css/input_text.css'

function Input_text(props: { type: string, id: string, handleInput: any}){
    return (
        <input type={props.type} id={props.id} className="input_text" onChange={e=>props.handleInput(e.target.value,e.target.name)}/>
    )
}

export default Input_text