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
                    Sou um dos inúmeros moradores do planeta terra apaixonado por café, conhecimento, tecnologia e desenvolvimento, 
                    pode-se dizer que foi amor a primeira vista. Tendo como base essas paixões eu venho procurado cada vez mais evoluir 
                    tanto no profissional como pessoal. Durante a maior parte de minha carreira como desenvolvedor, trabalhei como
                    freelancer no back-end (‘lado escuro da força’), e outros como full-stack (‘O Severino’). Por duas vezes dei início a 
                    graduação em ‘Análise e Desenvolvimento de Sistemas’ na UNIFACS, mas por motivos financeiros e outros, não 
                    consegui dar prosseguimento.
                </p>
                <p>
                    Hoje trabalho como desenvolvedor na Próton Sistemas, e em projetos própios.
                </p>
            </div>
            <div className={Styled.content}>
                <img className={Styled.img} src='/appends/img/mySelf.png' />
            </div>
        </section>
    )
}
