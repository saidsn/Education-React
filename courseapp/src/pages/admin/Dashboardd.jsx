import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Dashboard() {
    return (
        <>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Components</th>
                        <th scope="col">Settings </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <h3>Slider</h3>
                        </td>
                        <td>
                            <Link to="/SliderTable">
                             <Button variant="outline-primary">Manage</Button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            <h3>Header</h3>
                        </td>
                        <td>
                            <Link to="/HeaderTable">
                             <Button variant="outline-primary">Manage</Button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Dashboard;
