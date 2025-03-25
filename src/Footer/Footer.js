import React, { useState } from 'react';
import './Footer.css';

export default function Footer({ setTodos, categories }) {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    return (
        <div className="footer">
            <button onClick={toggleForm}>Ajouter une tâche</button>
            {showForm && <TaskForm setTodos={setTodos} categories={categories} toggleForm={toggleForm} />}
        </div>
    );
}

function TaskForm({ setTodos, categories, toggleForm }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateCreation, setDateCreation] = useState('');
    const [dateEcheance, setDateEcheance] = useState('');
    const [etat, setEtat] = useState('Nouveau');
    const [urgent, setUrgent] = useState(false);
    const [categorieId, setCategorieId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        const newTask = {
            id: Date.now(),
            title,
            description,
            date_creation: dateCreation,
            date_echeance: dateEcheance,
            etat,
            urgent,
        };

        await setTodos((prevData) => {
            const updatedData = { ...prevData };
            updatedData.taches.push(newTask);
            if (categorieId) {
                updatedData.relations.push({ tache: newTask.id, categorie: categorieId });
            }
            return updatedData;
        });

        setTitle('');
        setDescription('');
        setDateCreation('');
        setDateEcheance('');
        setEtat('Nouveau');
        setUrgent(false);
        setCategorieId('');

        toggleForm();
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
            <input
                type="text"
                placeholder="Titre de la tâche"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dateCreation}
                onChange={(e) => setDateCreation(e.target.value)}
                required
            />
            <input
                type="date"
                value={dateEcheance}
                onChange={(e) => setDateEcheance(e.target.value)}
                required
            />
            <select value={etat} onChange={(e) => setEtat(e.target.value)}>
                <option value="Nouveau">Nouveau</option>
                <option value="En cours">En cours</option>
                <option value="En attente">En attente</option>
                <option value="Reussi">Reussi</option>
                <option value="Abandonne">Abandonne</option>
            </select>
            <label>
                Urgent:
                <input
                    type="checkbox"
                    checked={urgent}
                    onChange={() => setUrgent(!urgent)}
                />
            </label>
            <select value={categorieId} onChange={(e) => setCategorieId(e.target.value)}>
                <option value="">Aucune catégorie</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.title}
                    </option>
                ))}
            </select>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Ajout en cours..." : "Ajouter la tâche"}
            </button>
        </form>
    );
}
