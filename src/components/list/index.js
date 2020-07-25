import Styled from './styles.module.css'

import Card from '../item';

export default function Index({ children ,...props }) {
    return (
        <div className={Styled.container}>
            { children }
        </div>
    )
}
