import "./Filters.css";

function Filters() {
  return (
    <div className="filters">
      <section className="filters__search">
        <div className="filters__title-clear">
          <h3>Search</h3>
          <p className="filters__title_clear-text">Clear Search</p>
        </div>
        <input
          className="filters__title_input"
          placeholder="Address, City, or Zip"
        ></input>
      </section>

      <form className="filters__filter">
        <div className="filters__title-clear">
          <h3>Filter</h3>
          <p className="filters__title_clear-text">Clear Filters</p>
        </div>

        <label htmlFor="city" className="filters__label">
          City
          <select className="filters__label_select" name="city">
            <option>Select Option</option>
            <option>St. Louis</option>
            <option>St. Louis</option>
            <option>St. Louis</option>
          </select>
        </label>
      </form>

      <form className="filters__sort">
        <h3>Sort</h3>
        <select>
          <option>Most Recent</option>
          <option>Least Recent</option>
          <option>Most Bedrooms</option>
          <option>Least Recent</option>
          <option>Highest Rent</option>
          <option>Lowest Rent</option>
        </select>
      </form>
    </div>
  );
}

export default Filters;
