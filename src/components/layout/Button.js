import styles from './Button.module.css'

function Button({type, text, onClick, key}){
    return (
        <div>
            <button className={`${styles.btn} ${styles[type]}`} onClick={onClick} type='button'>
                {text}
            </button>
        </div>
    )  
}

export default Button