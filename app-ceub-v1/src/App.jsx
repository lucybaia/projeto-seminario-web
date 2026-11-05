import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>Minha Primeira Aplicação</h1>
      <Cards titulo="Alunos Aprovados" nomeAluno="Maria e João"></Cards>
    </div>
  );
}

export default App;