import { useState } from 'react'
import Button from '../layout/Button'
import styles from './Company.module.css'

function Company() {

    const [days, setDays] = useState([
        { id: 'dom', text: 'Domingo', selected: false },
        { id: 'seg', text: 'Segunda', selected: false },
        { id: 'ter', text: 'Terça', selected: false },
        { id: 'qua', text: 'Quarta', selected: false },
        { id: 'qui', text: 'Quinta', selected: false },
        { id: 'sex', text: 'Sexta', selected: false },
        { id: 'sab', text: 'Sábado', selected: false }
    ])

    const daySelected = days.filter(day => day.selected).map(day => day.id)

    function addData(id) {
        setDays(days.map(day => day.id === id ? { ...day, selected: !day.selected } : day))
    }



    return (
        <div className={"flex flex-col gap-20"}>
            <h1 className={"flex mb-8"}>Escolha os dias de funcionamento da empresa</h1>
            <div className={"flex gap-2 row-4"}>
                {days.length > 0 &&
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