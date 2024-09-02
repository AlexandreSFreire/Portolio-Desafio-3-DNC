import styles from './Projects.module.css'
import Card from '../elements/Card'
import projeto1 from '../../Image/lpdnc.svg'
import projeto2 from '../../Image/PortfolioDevEmDobro.svg'
import projeto3 from '../../Image/DNCWeather.svg'

function Projects(){
    return(
        <div className={styles.Projects}>
            <h1>Projetos</h1>
            <div className={styles.Cards}>
                <Card
                img={projeto1}
                title="Landing Page DNC"
                text="Desenvolvido durante uma das aulas da DNC"
                repo="https://github.com/AlexandreSFreire/projeto-landing-page"
                site=""
                />
                <Card
                img={projeto2}
                title="Portfolio Dev Em Dobro"
                text="Primeiro Portfólio desenvolvido no decorrer de uma live dos Dev Em Dobro"
                repo="https://github.com/AlexandreSFreire/portfolio/tree/main"
                />
                <Card
                img={projeto3}
                title="DNC Weather"
                text="Desenvolvido durante uma das aulas da DNC, utilizando API para previsão do tempo"
                repo="https://github.com/AlexandreSFreire/DncWeather"
                />
            </div>
            
        </div>
    )
}

export default Projects