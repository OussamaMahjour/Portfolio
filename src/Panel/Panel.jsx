import styles from "./Panel.module.css"


function Panel(){



   



    return(
        <div className={styles.Main}>
           
            <div  className={styles.component}>
            <button className={styles.button}>Select picture</button>
            <input  placeholder="Name"/>
            <textarea placeholder="Description"></textarea>
             
            <button className={styles.button}>Create Card</button>
        </div>
        
        </div>
    );
}


export default Panel
