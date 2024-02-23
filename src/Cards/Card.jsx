import pfPic from ".././assets/Giga frog(1).jpg"
import styles from './Cards.module.css'

function Card(){

    return(
        <div className={styles.Main}>
        <div className={styles.card} >
            <img className={styles.img} alt="you don't have connexion" src={pfPic}></img>
            <h2 className={styles.h2} >Giga Frog</h2>
            <p className={styles.p}>i don't know what i'm doing so just ignore what you're reading </p>

        </div>
        </div>
    );




}

export default Card;