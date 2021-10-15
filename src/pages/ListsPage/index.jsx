import { Link } from 'react-router-dom'
import { UserCard } from '../../common/UserCard/Index';
import { ROUTES } from "../../routes/routesNames";
import './style.scss'

export const ListPage = (props) => {
    console.log(props.users);
    return (
        <div className="lists-page">
         <h1>List Page</h1>
         <Link to={ROUTES.HOME_PAGE}>
         <button className='return-btn'>Get Back</button>
         </Link>
         <div>
             {props.users.map((user, index) => (
                 <UserCard 
                    key = {user.name}
                    name={user.name}
                    age={user.age}
                    onCardClick = {() => props.onCardClick(index)}
                 />
             ))}
         </div>
        </div>

    )
}