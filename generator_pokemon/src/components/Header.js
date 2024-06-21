import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Générateur de Pokémon</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/all_team">Toutes les équipes de Pokémon aléatoires créées</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create_team">Générer une équipe de Pokémon aléatoire</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/edited_team">Modifier une équipe existante</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    );
}

export default Header;