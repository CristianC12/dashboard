import "./App.css";
import Banner from "./components/Banner/Banner";
import ImpostoRenda from "./components/ImpostoRenda/ImpostoRenda";
import Relatorio from "./components/Relatorio/Relatorio";
import CustodiaDistribuicao from "./components/CustodiaDistribuicao/CustodiaDistribuicao";
import CustodiaPosicao from "./components/CustodiaPosicao/CustodiaPosicao";
import ControleResultados from "./components/ControleResultados/ControleResultados";
import MenuSuperior from "./components/MenuSuperior/MenuSuperior";

function App() {
  return (
    <div className="App">
      <MenuSuperior />
      <Banner />
      <div className="components default-margin-components">
        <CustodiaDistribuicao />
        <ImpostoRenda />
        <Relatorio />
      </div>
      <div className="components default-margin-components">
        <CustodiaPosicao />
        <ControleResultados />
      </div>

      <label id="TESTE2" for="TESTE">
        {" "}
        Trocar tema da pagina *TERMINAR*
      </label>
      <input id="TESTE" name="theme" type="checkbox" class="toggle-dark-mode" />
    </div>
  );
}

export default App;
