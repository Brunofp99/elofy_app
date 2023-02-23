import { useEffect, useState } from 'react';

import './App.css';
import api from '../../app2/src/api';

function App() {
  const [hello, setHello] = useState([]);

  function palindromo(){ 
    let palavra = 'bruno'.toUpperCase();
    let palavraSplit = palavra.split("")
    let tamanhoPalavra = palavra.length
    let countIndexReverse = 1;
    let inverso = []
    
    palavraSplit.forEach(()=>{
      inverso.push(palavraSplit[tamanhoPalavra - countIndexReverse]);
      countIndexReverse++
    })

    console.log(JSON.stringify(palavraSplit) === JSON.stringify(inverso))
  }

  return (
    <>{palindromo()}</>
  );
}

export default App;