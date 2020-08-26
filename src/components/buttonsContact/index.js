import Styled from './styles.module.css'

export default function Index() {

    const msgWhatsapp = "Olá Heitor. Estou entrando em contato, por meio do link em seu site."

    const handleMouseEvent = () => {
        console.log(`Event Handle `)
    }

    return (
        <div className={Styled.container} onMouseEnter={handleMouseEvent} >
            <div className={Styled.content}>
                <IconButtons
                    href="https://github.com/heitorlucas2018"
                    img="/appends/img/github.png" />
                <IconButtons
                    href="https://www.linkedin.com/in/heitor-santos-773863150/"
                    img="/appends/img/linkedIn.png" />
                <IconButtons
                    href="mailto:heitorl09@gmail.com"
                    img="/appends/img/gmail.png" />
                <IconButtons
                    href={'https://api.whatsapp.com/send?phone=5575983228057&text=' + msgWhatsapp}
                    img="/appends/img/whatsapp.png" />
                <IconButtons
                    href="tel:+5575983228057"
                    img="/appends/img/phone.png" />
            </div>
        </div>
    )
}

function IconButtons({ href, img, style }) {
    return (
        <a href={href  || "/#teste" } style={style} target="_blank" >
            <img src={img} />
        </a>
    )
}
