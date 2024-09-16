import style from "./Time.module.css"
import React, { useState, useEffect } from 'react';
function Time(){
    const [time, setTime] = useState({
        day: new Date().getDay(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    
      // Função que atualiza o tempo a cada segundo
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          setTime({
            day: new Date().getDay(),
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
          });
        }, 1000);
    
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
      }, []);
    
      // Formatar a hora para sempre ter dois dígitos
      const formatTime = (unit) => {
        return unit < 10 ? `0${unit}` : unit;
      };
    return(
        <div className={style.times}>
            <div>
                <p className={style.title}>Days</p>
                <h1 className={style.number}>{time.day}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Hours</p>
                <h1 className={style.number}>{time.hours}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Minutes</p>
                <h1 className={style.number}>{time.minutes}</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Seconds</p>
                <h1 className={style.number}>{time.seconds}</h1>
            </div>
        </div>
    )
}
export default Time;