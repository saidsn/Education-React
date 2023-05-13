import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';

function AboutCreate() {

    const url = 'https://localhost:7184';

    const [about, setAbout] = useState([]);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getAllAbout = async () => {
        await axios.get(`${url}/api/About/GetAll`)
            .then((res) => {
                setAbout(res.data);
            });
    }

    useEffect(() => {
        getAllAbout();
    }, []);

    const CreateAbout = async () => {
        await axios
            .post(`${url}/api/About/Create`,
                {
                    Image: image,
                    Title: title,
                    Description: description
                })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'About Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.reload();
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'About not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
            reader.onerror = (error) => reject(error);
        });
    };

    const base64Img = (file) => {
        getBase64(file).then((result) => {
            setImage(result);
        });
    };


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create About</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Image</p>
                    <img
                        style={{
                            width: "200px",
                            height: "100px",
                            marginBottom: "10px",
                            borderRadius: "unset",
                        }}
                        src={`data:image/jpeg;base64,${image}`}
                        alt="about image"
                    />
                    <Form.Control type="file" onChange={(e) => base64Img(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Button variant="outline-primary" type="submit" onClick={() => CreateAbout()}>
                    Create
                </Button>
                <Link to="/AboutTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default AboutCreate;
