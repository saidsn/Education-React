import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


function SliderTable() {

    let count = 0;

    const url = 'https://localhost:7184';

    const [slider, setSlider] = useState([]);

    //   let token = JSON.parse(localStorage.getItem("token"));

    //   const config = {
    //     headers: { Authorization: `Bearer ${token}` },
    //   };

    //sweet alert
    const Success = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    const Reject = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    //Get Slider from Api
    async function getAllSlider() {
        await axios.get(`${url}/api/Slider/GetAll`)
            .then((res) => {
                setSlider(res.data);
            });
    }

    useEffect(() => {
        getAllSlider();
    }, []);

    // Delete Slider
    const DeleteSlider = async (id) => {
        await axios
            .delete(`${url}/api/Slider/Delete?id = ${id}`)
            .then(function (response) {
                Swal.fire("", "Deleted", "success");
                console.log(response);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(error);
            });
        getAllSlider(); 
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card my-5">
                    <h2 className="mx-auto">Slider Table</h2>

                    <Link to="/sliderCreate">
                        <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                    </Link>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th style={{ textAlign: "center" }}>Title</th>
                                <th style={{ textAlign: "center" }}>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                slider.map((slider, index) => (
                                    <tr key={index}>
                                        <td>{count++}</td>
                                        <td>
                                            <img style={{
                                                width: "100px",
                                                height: "70px",
                                                borderRadius: "unset",
                                            }}
                                                src={`data:image/jpeg;base64,${slider.image}`} alt="sliderImage" />
                                        </td>
                                        <td style={{ textAlign: "center" }} className="py-1" dangerouslySetInnerHTML={{ __html: slider.title }}></td>
                                        <td style={{ textAlign: "center" }}>
                                            <Link to={`/sliderUpdate/${slider.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                            <button
                                                onClick={() => DeleteSlider(slider.id)}
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












        // <div className="col-lg-12 grid-margin stretch-card">
        //     <div className="card">
        //         <div className="card-body">
        //             {/* <h4 className="card-title d-flex justify-content-between">
        //                 Slider
        //                 <SliderCreate />
        //             </h4> */}
        //             <h2 style={{textAlign:"center"}} className="my-5">Slider Table</h2>
        //             <table className="table table-striped">
        //                 <thead>
        //                     <tr>
        //                         <th>#</th>
        //                         <th> Slider Image </th>
        //                         <th> Slider Title </th>
        //                         {/* <th> Slider Create Date </th> */}
        //                         <th> Settings </th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {slider.map((slider, index) => (
        //                         <tr key={index}>
        //                             <td>{++count}</td>
        //                             <td className="py-1">
        //                                 <img
        //                                     style={{
        //                                         width: "100px",
        //                                         height: "70px",
        //                                         borderRadius: "unset",
        //                                     }}
        //                                     src={`data:image/jpeg;base64,${slider.image}`}
        //                                     alt=""
        //                                 />
        //                             </td>
        //                             <td className="py-1" dangerouslySetInnerHTML={{ __html: slider.title }}></td>
        //                             {/* <td className="py-1">{slider.createDate}</td> */}
        //                             <td>
        //                                 <Link to={`/sliderUpdate/${slider.id}`}>
        //                                     <button className="btn btn-primary" style={{ marginRight: "15px" }}>Update</button>
        //                                 </Link>
        //                                 <button
        //                                     onClick={() => DeleteSlider(slider.id)}
        //                                     type="button"
        //                                     className="btn btn-warning"
        //                                 >
        //                                     Delete
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
}

export default SliderTable;
