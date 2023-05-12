import style from './Projects.module.scss';
import { projects } from './dataProjects';

export default function Project() {
    return (
        <div className={style.container}>
            <h1>Projetos</h1>
            <div className={style.projects}>
                {
                    projects.map(project => {
                        return (
                            <div className={style.card}>
                                <div className={style.img}>
                                    <img src={project.img} alt={project.title} />
                                </div>

                                <div className={style.content}>
                                    <span className={style.title}>{project.title}</span>
                                    <p className={style.desc}>{project.text}</p>
                                    <a href={project.link}><button>Acessar</button></a>
                                </div>
                            </div>
                        );
                    })
                }




                {/* <div className={style.card}>
                    <div className={style.topCard}>
                        <div className={style.imgCard}>
                            <img src={netuno} alt="Site Netuno descartaveis" />
                        </div>
                    </div>
                    <div className={style.bottomCard}>
                        <div className={style.text}>
                            <p>Site Netuno Descartáveis</p>
                        </div>
                        <div className={style.btn}>
                                <button>Saiba mais</button>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techItem}>
                                <p>ReactJs | Javascript | Styled Components</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}