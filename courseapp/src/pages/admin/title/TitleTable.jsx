import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";
import axios from 'axios';



function TitleTable() {

    let count = 1;

    const url = 'https://localhost:7184';

    const [title, setTitle] = useState([]);

    const getAllTitle = async () => {
        await axios.get(`${url}/api/Title/GetAll`)
            .then((res) => {
                setTitle(res.data);
            });
    };

    useEffect(() => {
        getAllTitle();
    }, []);

    const DeleteTitle = async (id) => {
        await axios
            .delete(`${url}/api/Title/Delete?id=${id}`)
            .then((res) => {
                Swal.fire("", "Deleted Title", "success");
                console.log(res);
                getAllTitle();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(err);
            });
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card my-5">
                    <h2 className="">Title Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/TitleCreate">
                            <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="btn btn-success my-2" style={{ float: "right" }}>Dashboard</button>
                        </Link>
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>#</th>
                                <th>Title</th>
                                <th>Create date</th>
                                <th>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                title.map((title, index) => (
                                    <tr key={index} style={{ textAlign: "center",verticalAlign:"middle" }}>
                                        <td>{count++}</td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: title.name }}></td>
                                        <td>{new Date(title.createDate).toLocaleString('az-AZ', { hour12: false })}</td>
                                        <td>
                                            <Link to={`/TitleUpdate/${title.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                            <button
                                                onClick={() => DeleteTitle(title.id)}
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

export default TitleTable;
