import style from './About.module.css'
import TimeLine from '../elements/TimeLine.jsx'


function About(){
    return(
        <div className={style.About}>
            <TimeLine/>
        </div>
    )
}

export default About