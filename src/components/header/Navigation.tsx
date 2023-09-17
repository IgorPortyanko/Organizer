import { Link } from 'react-router-dom'


const Navigation = () => {

    return (

        <div className="navigation">
            <ul className="navigation-list">
                <li><Link to='/'>Домашня сторінка</Link> </li>
                <li><Link to='/todo'>Список завдань</Link></li>
                <li>Нотатки</li>
                <li>Погода</li>
            </ul>
        </div>
    )
}

export default Navigation