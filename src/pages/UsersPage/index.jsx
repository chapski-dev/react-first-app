import React from 'react'
import { UserCard } from '../../common/UserCard/Index'
import "./style.scss"

export const UsersPage = (props) => {
    return (
      <div className="users-page">
        <div>
          <button className="sort-btn" onClick={props.OnClickSortUsers}>Сортировать ▼</button>
        </div>
          {props.users.map((item, index) => (
        <UserCard
          key={item.name}
          avatar={item.avatar}
          name={item.name}
          age={item.age}
          phone={item.phone}
          active={item.active}
          onCardClick={() => props.handleUserActive(index)}
          onCloseClick={() => props.handleUserRemove(index)}
        />
      ))}
      </div>
    )
}
