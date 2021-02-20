import React from "react";

function SearchField(props) {
  return (
    <form>
      <input type="text" name="character_name" />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchField;
