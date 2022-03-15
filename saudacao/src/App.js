import './App.css';
import Saudacao from './components/Saudacao';

function getColor(dado) {
  if (dado == 'BOM DIA!'){
    return 'Morning'
  }
  if (dado == 'BOA TARDE!'){
    return 'Afternoon'
  }
  if (dado == 'BOM DIA!'){
    return 'Evening'
  }
  else{
    return
  }
}

function App(){
  return (
    <div className="App" id={getColor()}>
      <Saudacao/>
    </div>
  );
}

export default App;
