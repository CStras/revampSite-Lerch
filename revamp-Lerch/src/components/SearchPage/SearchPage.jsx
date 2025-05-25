import "./SearchPage.css";
import Map from "../Map/Map";
import List from "../List/List";

function SearchPage({ pageType, setPageType, houses }) {
  return (
    <div className="searchPage">
      <h2>Search Properties</h2>
      <section className="searchPage__button-background">
        <button
          onClick={() => {
            setPageType("List");
          }}
          className={
            pageType === "List"
              ? "searchPage__button-active"
              : "searchPage__button-dead"
          }
        >
          View List
        </button>
        <button
          onClick={() => {
            setPageType("Map");
          }}
          className={
            pageType === "List"
              ? "searchPage__button-dead"
              : "searchPage__button-active"
          }
        >
          View Map
        </button>
      </section>
      {pageType === "Map" && <Map></Map>}
      {pageType === "List" && <List houses={houses}></List>}
    </div>
  );
}

export default SearchPage;
