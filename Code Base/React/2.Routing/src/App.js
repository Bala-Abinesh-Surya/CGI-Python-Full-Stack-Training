import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";

// components
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import Contact from "./components/Contact";
import NotFoundPage from "./components/not-found-page";

function App() {
  return ( 
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/contact" element={<Contact />} />

        {/* Not found route should be the last route mentioned in the list of Routes  */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

