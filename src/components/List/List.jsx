import "./List.css";
import Filters from "../Filters/Filters";
import houses from "../../utils/constants";
import Cards from "../Cards/Cards";

function List() {
  return (
    <div className="list">
      <Filters></Filters>
      <div className="list__houses">
        {houses.map((item) => (
          <Cards item={item}></Cards>
        ))}
      </div>
    </div>
  );
}

export default List;
