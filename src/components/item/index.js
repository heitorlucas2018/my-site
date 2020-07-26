
import Styled from './styles.module.css'

function Index({ id, title, tag, data, description }) {

    return (
        <div className={Styled.container} >
            <h3>{title || 'title'}</h3>
           { tag &&  <a className={Styled.tag} href="/#teste" > {tag} </a> }
            {description && <h4>{description}</h4>}
            {data && <ul>
                { data.map(value => {
                    return <li key={value.trim()}>{value}</li>
                })}
            </ul>}
        </div>
    )
}

export default Index;