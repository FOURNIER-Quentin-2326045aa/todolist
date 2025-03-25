import { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Todo from './Todo/Todo.js';
import Footer from './Footer/Footer.js';
import datas from './datas.json';

function App() {
    const [currentTodos, setTodos] = useState(datas);

    return (
        <div className="App">
            <Header taches={currentTodos.taches} />
            <hr />
            <main>
                <Todo taches={currentTodos.taches} setTodos={setTodos} />
            </main>
            <hr />
            {/* Pass categories as a prop to Footer */}
            <Footer setTodos={setTodos} categories={currentTodos.categories} />
        </div>
    );
}

export default App;
