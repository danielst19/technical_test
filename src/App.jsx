import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { fetchData } from "./store/actions";

/* Components */
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";
import SearchField from "./components/SearchField";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Instructions />
      <SearchField />
      <CharacterList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps)(App);
