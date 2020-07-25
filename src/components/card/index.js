import Link from 'next/link'
import Styled from './styles.module.css'

export default function Index({ href, title, description }) {
    const alias = title.trim()

    return (
        <div className={Styled.container} >
            <Link href="/experiences">
                <a className={Styled.card}>
                    <h3>{title || 'title'} &rarr;</h3>
                    <p>{description || 'Descrption Card'}</p>
                </a>
            </Link>
        </div>
    )
}
