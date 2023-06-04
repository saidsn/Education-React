import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';
import axios from 'axios';

function ServiceTable() {

    let count = 1;

    const url = 'https://localhost:7184';

    const [service, setService] = useState([]);

    const getAllService = async () => {
        await axios.get(`${url}/api/Service/GetAll`)
            .then((res) => {
                setService(res.data);
            });
    };

    useEffect(() => {
        getAllService();
    }, []);

    const DeleteService = async (id) => {
        await axios
            .delete(`${url}/api/Service/Delete?id=${id}`)
            .then((res) => {
                Swal.fire("", "Deleted Service", "success");
                console.log(res);
                getAllService();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(err);
            });
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card my-5">
                    <h2 className="mx-auto">Service Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/ServiceCreate">
                            <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="btn btn-success my-2" style={{ float: "right" }}>Dashboard</button>
                        </Link>
                    </div>
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Create date</th>
                                <th>Update date</th>
                                <th>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service.map((service, index) => (
                                    <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <td>{count++}</td>
                                        <td>
                                            <img style={{
                                                width: "100px",
                                                height: "70px",
                                                borderRadius: "unset",
                                            }}
                                                src={`data:image/svg+xml;base64,${service.image}`} alt="serviceSvg" />
                                        </td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: service.title }}></td>
                                        <td style={{width:"40%"}}>{service.description}</td>
                                        <td>{moment(service.createDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>{moment(service.updateDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>
                                            <Link to={`/ServiceUpdate/${service.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                            <button
                                                onClick={() => DeleteService(service.id)}
                                                type="button"
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ServiceTable;
