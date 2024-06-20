import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/styles.css"


const apiUrl = process.env.API_URL;

const App = () => {
    const [data, setData] = useState(apiUrl);

    // useEffect(() => {
    //     fetch(`${apiUrl}`)
    //         .then
    //         .then
    //         .catch
    // }, []);

    return (
        <div>
            <Header />
            <h1 className="title">Liste des pokémons</h1>
            <ul>
                <li>{data}</li>
            <Footer />
            </ul>
        </div>
    );
    
}


export default App;
