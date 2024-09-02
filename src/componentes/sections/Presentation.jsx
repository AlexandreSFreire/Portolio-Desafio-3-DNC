import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('')
    const toRotate = ['Alexandre S. Freire.', 'Desenvolvedor Front End.','Estudante de Analise e Desenvolvimento de Sistemas.']
    const [loop, setLoop] = useState(0)
    const [isDeleting, SetIsDeleting] = useState(false);
    const period = 40;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        
        return()=>{clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring (0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            SetIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            SetIsDeleting(false)
            setDelta(90)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.Presentation}>
            <h1>Bem-vindo ao meu portfólio!</h1>
            <h4>Oi, eu sou {text}</h4>
            <p>
                Sou uma pessoa apaixonada por tecnologia e novidades do mercado. <br/>
                Como desenvolvedor Front-End, busco criar sites utilizando as<br/>
                ferramentas mais atuais no mercado de trabalho.<br/>
                Sempre estou a procura de desafios e de atualizar minhas bibliotecas <br/>
                com as ferramentas mais recentes disponíveis.
            </p>
            <div className={styles.btn}>
                <ButtonA link="#About" text='Saber mais'/>
            </div>
        </div>
    )

}

export default Presentation