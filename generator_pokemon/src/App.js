import { useEffect, useState } from "react";

const apiUrl = process.env.API_URL;

const App = () => {
    const [data, setData] = useState(apiUrl);

    useEffect(() => {
        fetch(`${apiUrl}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur dans la réponse');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Erreur dans la récupération de data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Mes pokémons aléatoires</h1>
            <ul>
                <li>{data}</li>
            </ul>
        </div>
    );
}


export default App;
