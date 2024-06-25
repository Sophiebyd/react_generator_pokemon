import { useEffect, useState } from "react";

const Home = () => {
    const [pokemons, setPokemons] = useState([]); // mets à jour le composant avec de nouvelles données 
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=-1`;

    // se connecter à un système extérieur
    useEffect(() => {
        const pokemonApi = async () => {
            try {
                const response = await fetch(apiUrl); // faire un get à l'API -> récupère le nom + url
                if (!response.ok) {
                    throw new Error("La réponse n'est pas OK"); // check si le fetch fonctionne
                }
                const data = await response.json(); // transforme la réponse en JSON
                const pokemonResult = data.results; // liste des résultats

                // fonction pour récupérer les détails de chaque Pokémon
                const pokemonDetails = async (url) => {
                    const response = await fetch(url); // -> utilisation de l'url car les autres données sont stockées dedans
                    if (!response.ok) {
                        throw new Error("Les données ne sont pas récupérées"); 
                    }
                    const dataPokemonDetails = await response.json();
                    return {
                        name: capitalizeFirstLetter(dataPokemonDetails.name), // Met la première lettre en majuscule
                        weight: dataPokemonDetails.weight,
                        height: dataPokemonDetails.height,
                        sprite: dataPokemonDetails.sprites.front_default,
                        spriteShiny: dataPokemonDetails.sprites.front_shiny,
                        type: capitalizeFirstLetter(dataPokemonDetails.types[0].type.name)
                    }; 
                };

                // tableau vide pour stocker les futures données des Pokémon avec détails
                const arrayPokemon = [];

                // boucle pour récupérer les détails de chaque Pokémon 
                for (const pokemon of pokemonResult) {
                    const details = await pokemonDetails(pokemon.url);
                    arrayPokemon.push(details);
                }

                // mettre à jour l'état avec la liste complète des Pokémon avec détails
                setPokemons(arrayPokemon);

            } catch (error) {
                console.error("Erreur pendant la récupération:", error);
            }
        };

        pokemonApi(); // appel de la fonction pour récupérer les Pokémon au chargement
    }, []);

    // fonction pour mettre la première lettre en majuscule
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="container">
            <h1 className="title">Liste des pokémons</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-5">
                {pokemons.map((pokemon, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card h-100">
                            <div className="d-flex">
                                <img src={pokemon.sprite} className="card-img-top flex-grow-1" alt={pokemon.name} />
                                <img src={pokemon.spriteShiny} className="card-img-top flex-grow-1" alt={pokemon.name} />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-center">{pokemon.name}</h2>
                                <p className="card-text mt-4">Weight: {pokemon.weight}</p>
                                <p className="card-text">Height: {pokemon.height}</p>
                                <p className="card-text">Type: {pokemon.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
