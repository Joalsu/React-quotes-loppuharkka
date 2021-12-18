function WordFilter({ wordFilter, setCount }) {
  return (
    <div>
      <label htmlFor="filter">Word count filter</label>

      <input
        id="filterField"
        type="text"
        value={wordFilter}
        //onChange={(e) => setCount(e.target.value)}
      />
    </div>
  );
}

export default WordFilter;
