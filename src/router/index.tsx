import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "pages/home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </Router>
    )
}

export default AppRouter;