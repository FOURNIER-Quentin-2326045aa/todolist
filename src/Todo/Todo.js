import React, { useState } from 'react';
import './Todo.css';
import Taches from './../Taches/Taches.js';

export default function Todo({ taches, setTodos }) {
    const [filteredTaches, setFilteredTaches] = useState(taches);

    const triToutes = () => setFilteredTaches(taches);
    const triReussi = () => setFilteredTaches(taches.filter((tache) => tache.etat === 'Reussi'));
    const triEnAttente = () => setFilteredTaches(taches.filter((tache) => tache.etat === 'En attente'));
    const triEnCours = () => setFilteredTaches(taches.filter((tache) => tache.etat === 'En cours'));
    const triNouveau = () => setFilteredTaches(taches.filter((tache) => tache.etat === 'Nouveau'));
    const triAbandonne = () => setFilteredTaches(taches.filter((tache) => tache.etat === 'Abandonne'));

    return (
        <div>
            <div className="filtres">
                <button onClick={triToutes}>Toutes</button>
                <button onClick={triReussi}>Reussi</button>
                <button onClick={triEnAttente}>En attente</button>
                <button onClick={triEnCours}>En cours</button>
                <button onClick={triNouveau}>Nouveau</button>
                <button onClick={triAbandonne}>Abandonne</button>
            </div>

            <h1>Liste des tâches</h1>

            <div className="taches">
                {filteredTaches.map((tache) => (
                    <Taches key={tache.id} tache={tache} />
                ))}
            </div>
        </div>
    );
}
