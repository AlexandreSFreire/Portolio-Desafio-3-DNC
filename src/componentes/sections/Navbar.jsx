import styles from "./Navbar.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul id="nav">
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#About'>Projetos</Nav.Link></li>
            </ul>
            <ul id="icons">
                <li><a href='https://www.linkedin.com/in/alexandre-freire-194694303'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/AlexandreSFreire'><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar