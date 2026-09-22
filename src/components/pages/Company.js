import styles from './Company.module.css'
import { useState, useEffect } from 'react'
import Button from '../layout/Button'

function Company() {

    const [days, setDays] = useState([
        { id: 'dom', text: 'Domingo', style:'default', selected:false},
        { id: 'seg', text: 'Segunda', style:'default', selected:false},
        { id: 'ter', text: 'Terça', style:'default', selected:false},
        { id: 'qua', text: 'Quarta', style:'default', selected:false},
        { id: 'qui', text: 'Quinta', style:'default', selected:false},
        { id: 'sex', text: 'Sexta', style:'default', selected:false},
        { id: 'sab', text: 'Sábado', style:'default', selected:false}
    ])

    const daySelected = days.filter(day => day.selected).map(day => day.id)

    function addData(id){
        const dayId = days.find( d => d.id === id)
        if(dayId && dayId.selected) {
            setDays(days.map(day => day.id === id ? {...day, selected: false} : day))
           // setDaySelected(daySelected.filter(dia => dia !=id))
        } else{
            setDays(days.map(day => day.id === id ? {...day, selected: true} : day))
           // setDaySelected([...daySelected, id])
        }
    }


    
    return (
        <div className={"flex-col w-full font-mono"}>
            <h1 className={"flex mb-8"}>Escolha os dias de funcionamento da empresa</h1>            
            <div className={"flex gap-5"}>
                {days.length> 0 &&
                    days.map((day, index) => (
                        <Button
                            key={index}
                            type={day.selected}
                            text={day.text}
                            onClick={() => addData(day.id)}
                        />
                ))}
            </div>
            <div className={styles.select}>
                <p>A empresa funcionará nos seguintes dias: </p>
                <span>{daySelected.join('-')}</span>
            </div>
            
        </div>
        )
}

export default Company;