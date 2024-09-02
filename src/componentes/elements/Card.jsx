import styles from './Card.module.css'
import ButtonA from './ButtonA'

function Card({img,title,text,site,repo}){
    return(
        <div className={styles.Card}>
            <div className={styles.image}>
                <a href={site}>
                    <img src={img} alt="ERROR" />
                </a>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ButtonA link={repo} text="Repositório" />
        </div>
    )
}

export default Card