import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AllTeam from "./components/AllTeam";
import CreateTeam from "./components/CreateTeam";
import EditedTeam from "./components/EditedTeam";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <div className="container flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/all_team" element={<AllTeam />} />
                        <Route path="/create_team" element={<CreateTeam />} />
                        <Route path="/edited_team" element={<EditedTeam />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}


export default App;
