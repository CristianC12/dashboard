import './App.css';
import Banner from './components/Banner/Banner';
import ImpostoRenda from './components/ImpostoRenda/ImpostoRenda';
import Relatorio from './components/Relatorio/Relatorio';
import Distribuicao from './components/Distribuicao/Distribuicao';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='components default-margin-components'>
        <Distribuicao />
        <ImpostoRenda />
        <Relatorio />
      </div>
    </div>
  );
}

export default App;
