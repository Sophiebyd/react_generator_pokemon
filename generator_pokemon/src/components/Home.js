import { useEffect, useState } from "react";

const Home = () => {
    const [pokemons, setPokemons] = useState([]); // mets à jour le composant avec de nouvelles données
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=-1"

    // se connecter à un système extérieur
    useEffect(() => {
        const pokemonApi = async () => {
            try {
                const response = await fetch(apiUrl); // faire un get à l'API
                if (!response.ok) {
                    throw new Error("La réponse n'est pas OK"); // check si le fetch fonctionne
                }
                const data = await response.json(); // transforme la réponse en JSON
                console.log(data);
                const pokemonResult = data.results; // liste des résultats
                setPokemons(pokemonResult); // mets à jour l'état
            } catch (error) {
                console.error("Erreur pendant la récupération:", error);
            }
        };
        pokemonApi()
    }, []);
    
    return (
        <div className="container">
            <h1 className="title">Liste des pokémons</h1>
            <div className="row">
                {pokemons.map((pokemon, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt='...' />
                            <div className="card-body">
                                <h5 className="card-title">Nom du pokémon</h5>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

// faire une boucle pour chaque pokémon 