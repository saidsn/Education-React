import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';


const BannerTable = () => {

    let count = 1;

    const url = 'https://localhost:7184';

    const [banner, setBanner] = useState([]);

    const getAllBanner = async () => {
        await axios.get(`${url}/api/Banner/GetAll`)
            .then((res) => {
                setBanner(res.data);
            });
    }

    useEffect(() => {
        getAllBanner();
    }, []);

    const DeleteBanner = async (id) => {
        await axios.delete(`${url}/api/Banner/Delete?id=${id}`)
            .then((res) => {
                swal.fire("", "Deleted Banner", "success");
                console.log(res);
                getAllBanner();
            })
            .catch((err) => {
                swal.fire({
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
                    <h2 className="mx-auto">Banner Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/BannerCreate">
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
                                <th>Update date</th>
                                <th>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                banner.map((banner, index) => (
                                    <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <td>{count++}</td>
                                        <td>
                                            <img style={{
                                                width: "100px",
                                                height: "70px",
                                                borderRadius: "unset",
                                            }}
                                                src={`data:image/svg+xml;base64,${banner.image}`}
                                                alt="bannerimage"
                                            />
                                        </td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: banner.title }}></td>
                                        <td>{moment(banner.createDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>{moment(banner.updateDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>
                                            <Link to={`/BannerUpdate/${banner.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                            <button
                                                onClick={() => DeleteBanner(banner.id)}
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

export default BannerTable;
