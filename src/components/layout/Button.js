import styles from './Button.module.css'
import { useState } from 'react'

function Button({type, text, onClick}){


    //const btn = "font-bold py-2 px-4 rounded border border-black w-30"
    const btn = "font-bold py-2 px-4 border-b-4 border-[#d1d1d1] rounded w-30"
    const btnCond = type ? "bg-[#ffbb33] text-[#222]" : "bg-[#222] text-[#fff]"

    return (
        <div>
            <button className={`${btn} ${btnCond}`} onClick={onClick} type='button'>
                {text}
            </button>
        </div>
    )  
}

export default Button