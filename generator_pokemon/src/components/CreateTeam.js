import styles from "../styles/styles.css"
import { useState, useEffect } from "react"

const CreateTeam = () => {
    const [posts, setPosts] = useState(); // création de la team
    const [team, setTeam] = useState(''); // name
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const createTeam = async () => {
            try {
                const response = await fetch(`${apiUrl}/pokemon/random`, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: ({ team })
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                if (!response.ok) {
                    throw new Error("La réponse n'est pas OK");
                }
                const createTeam = await response.json()
                console.log(createTeam);
                setPosts(createTeam)
            } catch (error) {
                console.error("Erreur pendant la récupération:", error);
            }
        }
        createTeam();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-5">Générer une équipe aléatoire</h1>
            <div className="mt-5">
                <form className="text-center">
                    <div className="mb-4">
                        <label htmlFor="teamName" className="form-label custom-label">Nom de l'équipe</label>
                        <input type="text" className="form-control mx-auto mt-3" id="teamName" aria-describedby="addTeamName" style={{maxWidth: '50%'}} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTeam