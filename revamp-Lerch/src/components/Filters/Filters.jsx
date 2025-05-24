import "./Filters.css";

function Filters() {
  return (
    <div className="filters">
      <section className="filters__search">
        <h3>Search</h3>
        <p>Clear Search</p>
        <input placeholder="Address, City, or Zip"></input>
      </section>

      <form className="filters__filter">
        <h3>Filter</h3>
        <p>Clear Filters</p>

        <label htmlFor="city">
          City
          <select name="city">
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
