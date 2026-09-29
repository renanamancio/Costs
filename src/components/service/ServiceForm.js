import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'


function ServiceForm({handleSubmit, btnText, projectData, serviceData}) {

    const[service, setService] = useState(serviceData || {})
    
    function submit(e){
        e.preventDefault()
        if(serviceData){
            handleSubmit(service)
        }else{
            projectData.services.push(service)
            handleSubmit(projectData)
        }

    }

    function handleChange(e){
        setService({ ...service, [e.target.name]: e.target.value})
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome do Serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            value={service.name ? service.name : ''}
            />
            <Input
            type="number"
            text="Custo do Serviço"
            name="cost"
            placeholder="Insira o valor total"
            handleOnChange={handleChange}
            value={service.cost ? service.cost : ''}
            />
            <Input
            type="text"
            text="Descrição do Serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
            value={service.description ? service.description : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm