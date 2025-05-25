import "./Cards.css";
import CardBtns from "../CardBtns/CardBtns";

function Cards({ item }) {
  return (
    <div className="card">
      <img className="card__img" src={item.img}></img>
      <div className="card__text">
        <div className="card__text_non-desc card__text_background-style">
          <p className="card__text_address">{item.address}</p>
          <p className="card__text_beds">Beds: {item.beds}</p>
          <p className="card__text_baths">Baths: {item.baths}</p>
          <p className="card__text_avaiable">Avaiable: {item.avaiable}</p>
        </div>
        <p className="card__text_description card__text_background-style">
          {item.description}
        </p>
        <CardBtns item={item}></CardBtns>
      </div>
    </div>
  );
}

export default Cards;
