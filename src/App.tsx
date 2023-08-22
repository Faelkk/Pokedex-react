import { useState } from "react";
import BtnsType from "./Components/BtnsType/BtnsType";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Pokedex from "./Components/Pokedex/Pokedex";
import "./Styles/Style.css";
import PokedexByFilter from "./Components/PokedexFiltrada/PokedexFiltrada";
import BtnTop from "./Components/Helpers/BtnTop";
import SearchPoke from "./Components/SearchPokemon/SearchPoke";
import PreviewPoke from "./Components/Preview/PreviewPoke";

const App = () => {
  const [typeName, setTypeName] = useState("");
  const [reloadPokedex, setReloadPokedex] = useState(0);

  const handleTypeNameChange = (newTypeName: string) => {
    setTypeName(newTypeName);
    setReloadPokedex(reloadPokedex + 1);
  };

  return (
    <div className="App">
      <Header />
      <div className="AppBody">
        <PreviewPoke />

        <SearchPoke />
        <BtnsType setTypeName={handleTypeNameChange} />
        {typeName ? (
          <PokedexByFilter
            typeName={typeName}
            key={reloadPokedex}
            setTypeName={setTypeName}
          />
        ) : (
          <Pokedex />
        )}
        <BtnTop />
      </div>
      <Footer />
    </div>
  );
};

export default App;
