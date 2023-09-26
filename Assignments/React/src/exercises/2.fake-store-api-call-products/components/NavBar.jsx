import { Link, Redirect, useNavigate } from "react-router-dom"

import axios from "axios"

export default function NavBar(){
    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        let num = Number(event.target.search.value)

        console.log(event)

        navigate(`/products/${num}`)
    }

    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
            <div className="container-fluid">
                <a className="navbar-brand">Online Shopping</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/products' className='nav-link'>Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/offers' className='nav-link'>Offers</Link>
                        </li>
                    </ul>
                <form className="d-flex" role="search" onSubmit={submitHandler}>
                    <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button className="btn btn-outline-success" onClick={navigateToCart} type="button">Cart</button>
                </div>
            </div>
        </nav>
    )
}