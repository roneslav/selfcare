import React from "react";

import styles from './Card.modules.css'
import advantage from './../img/advantage.svg'


function Card ({title, strength, description, price, img, itemId}) {
    return (
        <div className={styles.card}>
            <a href="#" className={styles.card__link}></a>
            <img className={styles.card__img} src={img} alt={styles.card__title} height="200" width="200"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__desc}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;