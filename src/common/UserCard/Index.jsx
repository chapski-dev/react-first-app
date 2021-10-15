import "./style.scss";

export const UserCard = (props) => {
  return (
    <div className={`card-wrapper ${props.active ? 'active' : ''}`}  onClick={props.onCardClick}>
      <button className="close" onClick={props.onCloseClick}>X</button>
      {props.avatar && <p><img src={props.avatar} alt="" /></p>}
      {props.name && <p>Name: {props.name}</p>}
      {props.age && <p>Age: {props.age}</p>}
      {props.phone && <p>Phone: {props.phone}</p>}
    </div>
  );
};