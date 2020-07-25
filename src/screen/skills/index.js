import ListSkills from '../../components/list'
import ListItem from '../../components/item'

import Styled from './styles.module.css'

export default function Index({ title, data }) {

    return (
        <section className={Styled.container}>
            <div className={Styled.content}>
                <h4 className={Styled.text_animation} style={{ fontSize: 40 }} >
                    { title || "# Skills" }
                </h4>
            </div>
            <div className={Styled.content} >
                <ListSkills>
                    {data && data.map(({ title, data, description }) => {
                        return <ListItem title={title} data={data}  description={description} />
                    })
                    }
                </ListSkills>
            </div>
        </section>
    )
}
