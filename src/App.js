import {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Header from './Header/Header.js';
import Todo from './Todo/Todo.js';
import Footer from './Footer/Footer.js';

import datas from './datas.json'

function App() {

  const[currentTodos, setTodos] = useState(datas)
  const taches = currentTodos.taches;

  return (
    <div className="App">
      <Header taches = {taches} />
      <hr/>
      <main>

        <Todo taches = {taches} setTodos={setTodos}/>

      </main>
    </div>
  );
}

export default App;
