import Styled from './styles.module.css'

import Card from '../card';

export default function Index() {
    return (
        <div className={Styled.grid}>
            <Card
                title="#Whoami"
                href="#whoami"
                description="Quem Sou." />
            <Card
                title="#Techskills"
                href="#techskills"
                description="Meus conhecimento tecnicos." />
            <Card
                title="#Softskills"
                href="#softskills"
                description="Minhas caracteristicas." />
        </div>
    )
}
