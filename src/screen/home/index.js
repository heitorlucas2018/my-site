import Styled from './styles.module.css';
import Grid from '../../components/grid';

export default function Home() {
    return (
        <section className={Styled.container}>
            <div className={Styled.content}>
                <h3 className={Styled.text_animation} >
                    Hello, my name is Heitor Santos.
                     </h3>
                <h4 className={Styled.text_animation} >
                    Welcome to my world and my life.
                    </h4>
                <p>
                Sou um dos inúmeros moradores do planeta terra apaixonado por café, conhecimento, tecnologia e tudo que a envolve, pode-se dizer que foi amor à primeira vista. Tendo como base essas paixões eu venho procurado cada vez mais evoluir tanto no profissional como pessoal. Durante a maior parte de minha carreira como desenvolvedor, trabalhei como no backEnd (‘lado negro da força’), e outros como full-stack (‘o severino’). 
                </p>
                <p>
                Atualmente estou dando continuidade a graduação em Análise e Desenvolvimento de Sistema na Estácio, e trabalhando em uma ótima empresa, como Analista de Sistemas. 
                </p>
            </div>
            <div className={Styled.content}>
                <img className={Styled.img} src='/appends/img/mySelf.png' />
            </div>
        </section>
    )
}
