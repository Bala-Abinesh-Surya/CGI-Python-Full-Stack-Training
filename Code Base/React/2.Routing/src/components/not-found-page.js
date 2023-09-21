import { Link } from 'react-router-dom'

import NotFoundImage from './page-not-found.jpg'

import './page-not-found-style.css'

const NotFoundPage = () => {
    return (
        <div className="page-not-found">
            <img src={NotFoundImage} alt="page-not-found" width='200px'/>
            <div>
                <h3>Page Not Found</h3>
                <p>We're sorry we cannot get you the page you requested</p>
                <Link to='/' className='link'>Go to Home Page</Link>
            </div>
        </div>
    )
}

export default NotFoundPage