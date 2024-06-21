import { useEffect, useState } from "react";

const Home = () => {
    const [pokemons, setPokemon] = useState();
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=-1"

    useEffect(() => {
        const pokemonApi = async() = {
            try {
                const response = await fetch(apiUrl)
            } catch(error) {
                console.error("Erreur pendant la récupération:", error);
            }
        }

    }, [apiUrl])

    return (
        <div>
            <h1 className="title">Liste des pokémons</h1>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

// faire une boucle pour chaque pokémon 