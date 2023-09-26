import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

// routes
import ProductsPage from "./routes/ProductsPage";
import HomePage from "./routes/HomePage";
import OffersPage from "./routes/OffersPage";
import ProductPage from "./routes/ProductPage";
import CartPage from "./routes/Cart";

// components
import NavBar from "./components/NavBar";

// store
import store from "./store/store";

export default function FakeStoreApi(){
    return (
        <Provider store={store}>
            <Router>
            <NavBar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/products/:number' element={<ProductPage />} />
                    <Route path='/offers' element={<OffersPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<>Not found</>} />
                </Routes>
            </Router>
        </Provider>
    )
}