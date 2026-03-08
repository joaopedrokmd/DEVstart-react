import { useState } from 'react'
import './App.css'


function App() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h1>Meu primeiro React 🚀</h1>

      <p>Você clicou {numero} vezes</p>

      <button onClick={() => setNumero(numero + 1)}>
        Aumentar
      </button>

      <button onClick={() => setNumero(numero - 1)}>
        Diminuir
      </button>

      <button onClick={() => setNumero(0)}>
        Resetar
      </button>
    </div>
  );
}

export default App;
