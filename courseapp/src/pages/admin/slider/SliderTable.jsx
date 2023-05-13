import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


function SliderTable() {

    let count = 1;

    const url = 'https://localhost:7184';

    const [slider, setSlider] = useState([]);

    //Get Slider from Api
    const getAllSlider = async () => {
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
            .delete(`${url}/api/Slider/Delete?id=${id}`)
            .then((res) => {
                Swal.fire("", "Deleted Slider", "success");
                console.log(res);
                getAllSlider();
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
                    <h2 className="mx-auto">Slider Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/SliderCreate">
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
                                slider.map((slider, index) => (
                                    <tr key={index} style={{ textAlign: "center",verticalAlign:"middle" }}>
                                        <td>{count++}</td>
                                        <td>
                                            <img style={{
                                                width: "100px",
                                                height: "70px",
                                                borderRadius: "unset",
                                            }}
                                                src={`data:image/jpeg;base64,${slider.image}`} alt="sliderImage" />
                                        </td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: slider.title }}></td>
                                        <td>{new Date(slider.createDate).toLocaleString('az-AZ', { hour12: false })}</td>
                                        <td>
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
