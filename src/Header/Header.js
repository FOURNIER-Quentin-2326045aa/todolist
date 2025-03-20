import './Header.css'

export default function header({ taches = [] })
{
    const nbTaches = taches.length;
    const nbTachesReussi = taches.filter((tache) => tache.etat === 'Reussi').length;
    const nbTachesEnAttente = taches.filter((tache) => tache.etat === 'En attente').length;
    const nbTachesNouveau = taches.filter((tache) => tache.etat === 'Nouveau').length;

    return (
        <header>
            <h1>ToDo list</h1>
            <div>
                vous avez <b>{nbTaches}</b> Taches
                <br/>
                <br/>
                <p>
                ✅ vous avez <b class="green">{nbTachesReussi} Taches reussi </b>
                | ⌛ vous avez <b class="yellow">{nbTachesEnAttente} Taches en attente </b>
                | 🆕 vous avez <b class="blue">{nbTachesNouveau} Taches nouveau</b>
                </p>
            </div>
        </header>
    );
}