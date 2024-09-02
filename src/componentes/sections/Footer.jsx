import style from './Footer.module.css'
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className={style.footer}>
            <div>
                <p>
                    Meu contato: <br/>
                    (11)9 5409-1054
                </p>
            </div>
            <div>
                <p>
                    Email: <br/>
                    alexandresfreire1@gmail.com
                </p>
            </div>
            <div className={style.icones}>
                <a href='https://www.linkedin.com/in/alexandre-freire-194694303'><FaLinkedin size={30}/></a>
                <a href='https://github.com/AlexandreSFreire'><FaGithub size={30}/></a>
                <a href=""><FaFigma size={30}/></a>
            </div>
        </div>
    )
}

export default Footer