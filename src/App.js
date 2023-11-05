import './App.scss';
import ComponenteCambio from './components/ComponenteCambio';

const Saludo = ({ nombre }) => {
  return (
    <div className='nombre'>{ nombre }</div>
  )
}

function App() {
  return (
    <div className="App">
      <Saludo nombre="Netlify"/>
      <ComponenteCambio/>
    </div>
  );
}

export default App;
