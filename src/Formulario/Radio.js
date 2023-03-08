import React from 'react';
import styles from '../css/Radio.module.css';

const Radio = ({titulo,options,valor,check,active,...props}) => {
    //1)quando o input é aninhado com o label, não é necessário passar o htmlFor
    //2)onChange e id é passado pelas props

  if(!active)//active === false
    return null;
  else
    return (
        <div className={styles.containerInput}>
            <h2 className={styles.tituloPergunta}>{titulo}</h2>
            {options.map((elemento,indice) => (
                <label key={indice} className={styles.label}>
                    <input className={styles.input} type="radio" value={elemento} check={check} checked={elemento === check} {...props} />
                    <span className={styles.nomePergunta}>{elemento}</span>
                </label>
            ))}
        </div>
    )
}

export default Radio;