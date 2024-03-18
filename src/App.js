import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppContext } from "./context/contextApi";
import MealItemDetails from "./pages/MealItemDetails";

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meals/:id" element={<MealItemDetails />} />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
