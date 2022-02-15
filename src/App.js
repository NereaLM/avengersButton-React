import './App.css';
import Saludo from './Saludo';

function App() {

  const avengers = {

    spiderman: {
    
    nombreReal: "Peter Parker",
    
    nombre: "Spiderman"
    
    },
    
    ironMan: {
    
    nombreReal: "Tony Stark",
    
    nombre: "Iron Man"
    
    },
    
    capAmerica: {
    
    nombreReal: "Steve Rogers",
    
    nombre: "Capitán América"
    
    }
    
    }
  return (
   <>
    <Saludo
      vengador={avengers.spiderman.nombre}
      nombre={avengers.spiderman.nombreReal}
      />
      <Saludo
      vengador={avengers.ironMan.nombre}
      nombre={avengers.ironMan.nombreReal}
      />
      <Saludo
      vengador={avengers.capAmerica.nombre}
      nombre={avengers.capAmerica.nombreReal}
      />

   </>
   
  );
}

export default App;
