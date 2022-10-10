import "./Card.css"

const Card = ({ name, info, img }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={img} alt="{name}"/>
      <p>{info}</p>
    </div>
  );
};

export default Card;
