import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./styles/styles.css";
// import Home from "./components/Home";
// import AllTeam from "./components/AllTeam";
// import CreateTeam from "./components/CreateTeam";
// import EditedTeam from "./components/EditedTeam";

// import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <>
            <Header />
            <h1 className="title">Liste des pokémons</h1>
            <ul>
                <li></li>
            </ul>
            {/* <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/AllTeam" component={AllTeam} />
                    <Route path="/CreateTeam" component={CreateTeam} />
                    <Route path="/EditedTeam" component={EditedTeam} />
            </Router> */}
    <Footer />

        </>
    );

}


export default App;
