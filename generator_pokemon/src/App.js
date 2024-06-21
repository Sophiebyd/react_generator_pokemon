import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./styles/styles.css";
import Home from "./components/Home";
import AllTeam from "./components/AllTeam";
import CreateTeam from "./components/CreateTeam";
import EditedTeam from "./components/EditedTeam";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/all_team" element={<AllTeam />} />
                        <Route path="/create_team" element={<CreateTeam />} />
                        <Route path="/edited_team" element={<EditedTeam />} />
                    </Routes>
                <Footer />
        </Router>
    );
}


export default App;
