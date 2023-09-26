import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <Link to='/' className='navbar-brand'>MyApp</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/products' className='nav-link'>Products</Link>
                    <Link to='/contact-us' className='nav-link'>Contact Us</Link>
                    <Link to='/login' className='nav-link'>Login</Link>
                    <Link to='/register' className='nav-link'>Register</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar