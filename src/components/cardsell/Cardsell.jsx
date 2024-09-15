import style from './Cardsell.module.css'
import fivestar from '../../assets/fivestar.png'
import React, { useState } from 'react';

function Cardsell({imgSrc,alt,free,price,pricedel,title,numberstar}){
    return(
        <div>
            <p className={style.free}>{free}</p>
            <div className={style.image}>
                <img src={imgSrc} alt={alt}></img>
            </div>
            <h1 className={style.title}>{title}</h1>
            <div className={style.prices}>
                <h1 className={style.pricee}>{price}</h1>
                <del className={style.dell}>{pricedel}</del>
            </div>
            <div className={style.stars}>
                <img src={fivestar} alt="cinco estrelas" />
                <p>({numberstar})</p>
            </div>
        </div>
    )
}
export default Cardsell;