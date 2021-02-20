import axios from "axios";
import { READ_CHARACTERS } from "./actionTypes";

/**
 * Realiza la consulta de la información en la API
 * @param characterName
 * @returns {function(*): Promise<void>}
 */
export const fetchData = (characterName = "") => async (dispatch) => {
  try {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
    const data = response.data.results;
    dispatch({ type: READ_CHARACTERS, payload: data });
  }catch (error) {
    console.log(error);
  }
};
