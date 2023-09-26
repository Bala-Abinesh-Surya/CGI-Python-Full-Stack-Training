import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div class="container py-4">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Welcome to Home Page</h1>
                    <p class="col-md-8 fs-4">We have lots and lots of first class products just like Amazon, but with much affordable prize</p>
                    <Link to='/products' className="btn btn-primary btn-lg" >Products Page</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage