import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import SliderCreate from "./SliderCreate"

function SliderTable() {
  let count = 0;
  const baseUrl = "https://localhost:7184";

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

  //Get Movies from Api
  async function getAllSlider() {
    await axios.get(`${baseUrl}/api/Slider/GetAll`).then((res) => {
      return setSlider(res.data);
    });
  }

  useEffect(() => {
    getAllSlider();
  }, []);

  //Delete Banner
  const DeleteSlider = async (id) => {
    await axios
      .delete(`${baseUrl}/api/Slider/Delete?id=${id}`)
      .then(function (response) {
        Swal.fire("", "Deleted", "success");
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });
    getAllSlider();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Slider
            <SliderCreate />
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Slider Image </th>
                <th> Slider Title </th>
                <th> Slider Create Date </th>
                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {slider.map((slider, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  <td className="py-1">
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                      src={`data:image/jpeg;base64,${slider.image}`}
                      alt=""
                    />
                  </td> 
                  <td className="py-1"   dangerouslySetInnerHTML={{ __html: slider.title }}></td>        
                  <td className="py-1">{slider.createDate}</td>
                  <td>
                    <Link to={`/bannerUpdate/${slider.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeleteSlider(slider.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SliderTable;
