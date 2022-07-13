import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, searchParameter, onChangeHandler } = props;
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        value={searchParameter}
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default SearchBox;
