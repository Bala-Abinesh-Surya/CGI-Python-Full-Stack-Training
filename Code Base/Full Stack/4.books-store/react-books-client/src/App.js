import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// routes
import HomePage from "./routes/HomePage";
import BooksPage from "./routes/BooksPage";
import ContactUs from "./routes/ContactUs";
import NotFoundPage from "./routes/NotFoundPage";

// redux store
import Store from "./store/Store";

function App() {
  return (
    <Router>
      <Provider store={Store}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BooksPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
