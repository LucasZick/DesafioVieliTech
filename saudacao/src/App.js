import './App.css';
import Saudacao from './components/Saudacao';
import GetDado from './getDado'

function getColor() {
  var data = GetDado()
  if (data === 'BOM DIA!'){
    console.log('Morning')
    return 'Morning'
  }
  if (data === 'BOA TARDE!'){
    console.log('Afternoon')
    return 'Afternoon'
  }
  if (data === 'BOA NOITE!'){
    console.log('Evening')
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
