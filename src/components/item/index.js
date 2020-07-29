
import Styled from './styles.module.css'

function Index({ id, title, tags, data, description }) {

    return (
        <div className={Styled.container} >
            <h3>{title || 'title'}</h3>
            {tags && <div className={Styled.tag}>
                { tags.map(value => {
                        return <a href="/#teste" > {value} </a>
                    })}
            </div>}
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