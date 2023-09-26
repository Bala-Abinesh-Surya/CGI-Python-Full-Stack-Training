const Products = () => {
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <table class="table table-hover table-striped table-bordered caption-top">
                <caption>List of products</caption>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">ManuDate</th>
                        <th scope="col">ExpDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>HP Pendrive</td>
                        <td>500</td>
                        <td>HP</td>
                        <td>Dec 2022</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Clark's Log Table</td>
                        <td>200</td>
                        <td>Tennet</td>
                        <td>Nov 2022</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Richest man in Babylon</td>
                        <td>100</td>
                        <td>Fingerprint</td>
                        <td>Jan 2019</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Bite of Mango</td>
                        <td>850</td>
                        <td>-</td>
                        <td>Apr 2021</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products