import "./CardBtns.css";

function CardBtns({ item }) {
  return (
    <div className="cardBtn">
      <h2>${item.price}</h2>
      <button className="cardBtn__schedule-btn">Schedule Viewing</button>
      <div className="cardBtn__text">
        <p>Or</p>
        <a href="https://lerchproperties.net/properties">
          submit an application
        </a>
      </div>
    </div>
  );
}

export default CardBtns;
