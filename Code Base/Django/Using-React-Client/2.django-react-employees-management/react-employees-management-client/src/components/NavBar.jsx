import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" >Employee Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/' >All employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/add-employee' >Add employee</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}