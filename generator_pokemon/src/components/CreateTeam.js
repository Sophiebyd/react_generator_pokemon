import styles from "../styles/styles.css"
import { useState, useEffect } from "react"

const CreateTeam = () => {
    const [posts, setPosts] = useState([]); // création de la team
    const [name, setName] = useState(''); // name
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const createTeam = async () => {
            try {
                const response = await fetch(`${apiUrl}/pokemon/random`, {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                if (!response.ok) {
                    throw new Error("La réponse n'est pas OK");
                }
                const dataTeam = await response.json();
                console.log(dataTeam);
                setPosts(dataTeam);
            } catch (error) {
                console.error("Erreur pendant la récupération:", error);
            }
        }
        createTeam();
    }, [name, apiUrl])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const teamName = form.teamName.value;
        setName(teamName);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Générer une équipe aléatoire</h1>
            <div className="mt-5">
                <form className="text-center" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="teamName" className="form-label custom-label">Nom de l'équipe</label>
                        <input type="text" className="form-control mx-auto mt-3" id="teamName" aria-describedby="addTeamName" style={{ maxWidth: '50%' }} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block">Envoyer</button>
                </form>
            </div>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title text-center">{posts.name}</h2>
                                <ul className="card-text mt-4">
                                {posts.map((pokemon, index) => (
                                    <li key={index}>{pokemon.name}</li>
                                )
                            )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTeam