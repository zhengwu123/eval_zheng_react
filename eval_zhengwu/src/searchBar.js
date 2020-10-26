import React from "react";

const SearchBar = ({
  input: keyword,
  onChange: setKeyword,
  placeholder: placeholder
}) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem"
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={placeholder}
      onChange={(event) => {
        // if (event.key === "Enter") {
        setKeyword(event.target.value);
        //}
      }}
      //(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
