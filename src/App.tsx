import Home from "./pages/home/Home";
const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App
