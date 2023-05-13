import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Dashboard() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 grid-margin stretch-card my-5'>
                        <h2 className="">Dashboard</h2>
                        <Table striped bordered hover variant='dark'>
                            <thead>
                                <tr style={{ textAlign: "center" }}>
                                    <th scope="col">#</th>
                                    <th scope="col">Components</th>
                                    <th scope="col">Settings </th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "center" }}>
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
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <h3>Title</h3>
                                    </td>
                                    <td>
                                        <Link to="/TitleTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                        <h3>About</h3>
                                    </td>
                                    <td>
                                        <Link to="/AboutTable">
                                            <Button variant="outline-primary">Manage</Button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
