import Home from "./pages/home/Home";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App
