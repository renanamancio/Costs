import styles from './Company.module.css'
import Data from '../layout/Data'
import { useState, useEffect } from 'react'
import Button from '../layout/Button'

function Company() {

    const [days, setDays] = useState([
        {index: 0, id: 'dom', text: 'Domingo', style:'default', selected:false},
        {index: 1, id: 'seg', text: 'Segunda', style:'default', selected:false},
        {index: 2, id: 'ter', text: 'Terça', style:'default', selected:false},
        {index: 3, id: 'qua', text: 'Quarta', style:'default', selected:false},
        {index: 4, id: 'qui', text: 'Quinta', style:'default', selected:false},
        {index: 5, id: 'sex', text: 'Sexta', style:'default', selected:false},
        {index: 6, id: 'sab', text: 'Sábado', style:'default', selected:false}
    ])

    const sorted = useMemo(() => days.slice().sort((a, b) => a.index - b.index), [days])

    const [daySelected, setDaySelected] = useState([])
    const [dayOrder, setDayOrder] = useState([])
    

    useEffect(() => {

        daySelected.sort((a, b) => a - b)
        setDayOrder(...dayOrder, daySelected.id)
            
        }, [daySelected]);
    

    function select(id){
        setDays(days.map(day => day.id === id ? {...day, style:'selected', selected: true} : day))
        setDaySelected([...daySelected, id, index])
        
    }

    function unSelect(id){
        setDays(days.map(day => day.id === id ? {...day, style:'default', selected: false} : day))
        setDaySelected(daySelected.filter(dia => dia !=id))
       
    }
    
    
    function addData(id){
        if(getSelect(id)) {
            unSelect(id)
            console.log(daySelected)
        } else{
            select(id)
            console.log(daySelected)
        }
    }

    function getStyle(id){
        const day = days.find( d => d.id === id)
        return day ? day.style : 'default'
    }
    
    function getSelect(id){
        const day = days.find( d => d.id === id)
        return day ? day.selected : false
    }

    return (
        <div>
            Escolha o dia da semana
            
            <div>
                {days.length> 0 &&
                    days.map((day) => (
                        <Button
                            type={getStyle(day.id)}
                            text={day.text}
                            onClick={() => addData(day.id)}
                            
                        />
                ))}
            </div>
            <div>
                {dayOrder.join("-")}
            </div>
            
        </div>
        )
}

export default Company;