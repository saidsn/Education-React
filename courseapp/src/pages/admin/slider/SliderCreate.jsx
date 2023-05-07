import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';




function SliderCreate() {

    const url = 'https://localhost:7184';

    const [slider, setSlider] = useState([]);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();

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

    const getAllSlider = async () => {
        await axios.get(`${url}/api/Slider/GetAll`)
            .then((res) => {
                setSlider(res.data);
            });
    }

    useEffect(() => {
        getAllSlider();
    }, []);


    const CreateSlider = async () => {
        await axios
            .post(`${url}/api/Slider/Create`,
                {
                    Image: image,
                    Title: title
                })
            .then(res => {
                Success.fire({
                    icon: "success",
                    title: "Slider Created",
                });
                window.location.reload();
            })
            .catch(error => {
                Reject.fire({
                    icon: "error",
                    title: "Slider Not Created",
                });
            });
    }


    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
            reader.onerror = (error) => reject(error);
        });
    }

    const base64Img = (file) => {
        getBase64(file).then((result) => {
            setImage(result);
        });
    }



    return (

        <div className="create-btn-area container" style={{maxWidth:"500px"}}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Slider</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => base64Img(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Button variant="outline-primary" type="submit" onClick={() => CreateSlider()}>
                    Create
                </Button>
                <Link to="/SliderTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default SliderCreate;
