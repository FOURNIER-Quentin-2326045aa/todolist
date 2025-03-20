import "./Taches.css";

export default function Taches({tache, setTodos}) {

    function handleClick()
    {
        console.log(tache.title);
    }

    return (
        <div className = {`div-tache ${tache.etat.toLowerCase().replace(/\s+/g, '')} ${tache.urgent ? 'urgent' : 'nonurgent'}`}
            onClick={handleClick}>
            <h2>{tache.title}</h2>
            <p>Description: {tache.description || 'Aucune description'}</p>
            <p>Date de création : {tache.date_creation}</p>
            <p>Date d'échéance : {tache.date_echeance}</p>
            <p>État : {tache.etat}</p>
        </div>
    )
}