import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';

function HeaderTable() {

    let count = 1;

    const url = 'https://localhost:7184';

    const [header, setHeader] = useState([]);

    const getAllHeader = async () => {
        await axios.get(`${url}/api/Header/GetAll`)
            .then((res) => {
                setHeader(res.data);
            });
    };

    useEffect(() => {
        getAllHeader();
    }, []);


    const DeleteHeader = async (id) => {
        await axios
            .delete(`${url}/api/Header/Delete?id=${id}`)
            .then((res) => {
                Swal.fire("", "Deleted Header", "success");
                console.log(res);
                getAllHeader();
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
                    <h2 className="mx-auto">Header Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/HeaderCreate">
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
                                <th>Create date</th>
                                <th>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                header.map((header, index) => (
                                    <tr key={index} style={{ textAlign: "center",verticalAlign:"middle" }}>
                                        <td>{count++}</td>
                                        <td>
                                            <img style={{
                                                width: "100px",
                                                height: "70px",
                                                borderRadius: "unset",
                                            }}
                                                src={`data:image/jpeg;base64,${header.image}`} alt="headerImage" />
                                        </td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: header.title }}></td>
                                        <td>{new Date(header.createDate).toLocaleString('az-AZ', { hour12: false })}</td>
                                        <td>
                                            <Link to={`/HeaderUpdate/${header.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                            <button 
                                                onClick={() => DeleteHeader(header.id)}
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

export default HeaderTable; 
