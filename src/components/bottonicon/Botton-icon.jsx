import style from './Botton-icon.module.css'

function Bottonicon({srcIcon, desc}){
    return(
        <div className={style.botton}>
            <img src={srcIcon}></img>
            <p>{desc}</p>
        </div>
    )
}

export default Bottonicon