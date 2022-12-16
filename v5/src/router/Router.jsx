import {Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/*" element={<ErrorPage errorMessage="Error 404"/>} />
            <Route path="/error/" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router
