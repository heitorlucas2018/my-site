
import Styled from './styles.module.css'

function Index({ id, title, data, description }) {

    return (
        <div className={Styled.container} >
            <h3>{ title || 'title' }</h3>
            <h4>{ description }</h4>
            <ul>
                { data && data.map(value => {
                    return <li key={value.trim()}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Index;