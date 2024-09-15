import principal from '../assets/principal.png'
import './head.css'

export default function Head(){
    return (
        <div>
            <img src={principal} id='principal'/>
            <h1>fala galera</h1>
        </div>
    )
}