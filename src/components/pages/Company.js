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
            setDays(days.map(day => day.id === id ? {...day, style:'default', selected: false} : day))
           // setDaySelected(daySelected.filter(dia => dia !=id))
        } else{
            setDays(days.map(day => day.id === id ? {...day, style:'selected', selected: true} : day))
           // setDaySelected([...daySelected, id])
        }
    }

    function getStyle(id){
        const day = days.find( d => d.id === id)
        return day ? day.style : 'default'
    }
    
    return (
        <div className={styles.company}>
            <h1>Escolha os dias de funcionamento da empresa</h1>
            
            <div className={styles.buttons}>
                {days.length> 0 &&
                    days.map((day, index) => (
                        <Button
                            key={index}
                            type={getStyle(day.id)}
                            text={day.text}
                            onClick={() => addData(day.id)}
                        />
                ))}
            </div>
            <div className={styles.select}>
                {daySelected.join('-')}
            </div>
            
        </div>
        )
}

export default Company;