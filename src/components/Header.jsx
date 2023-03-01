import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchParamContext from "../context/SearchParamContext";

const Header = () => {
  const [searchParam, setSearchParam] = useContext(SearchParamContext);

  return (
    <header>
      <h2 className="title">Emocionario</h2>
      <div className="input-wrap">
        <input
          aria-label="Buscar emoción"
          placeholder="Buscar emoción"
          type="text"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam}
        ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
