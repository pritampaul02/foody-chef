import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/contextApi";
import MealItemDetails from "./pages/MealItemDetails";
import Loader from "./pages/Loader";

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meals/:id" element={<MealItemDetails />} />
                    <Route path="/loader" element={<Loader />} />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
