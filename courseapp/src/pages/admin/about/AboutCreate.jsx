import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';

const AboutCreate = () => {

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [about, setAbout] = useState([]);
    const [image, setImage] = useState();
    const [showImage, setShowImage] = useState(null);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getAllAbout = async () => {
        await axios.get(`${url}/api/About/GetAll`)
            .then((res) => {
                setAbout(res.data);
            });
    };

    useEffect(() => {
        getAllAbout();
    }, []);


    const newAbout = {
        photo: image,
        title: title,
        description: description
    };

    const CreateAbout = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newAbout)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/About/Create`, formData, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'About Created',
                    showConfirmButton: false,
                    timer: 1500
                });
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

        navigate('/AboutTable');
    };

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setShowImage(URL.createObjectURL(file));
    };

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create About</h2>
            <Form onSubmit={(e) => CreateAbout(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Image</p>
                    {showImage !== null ?
                        <img
                            style={{
                                width: "200px",
                                height: "100px",
                                marginBottom: "10px",
                                borderRadius: "unset",
                            }}
                            src={showImage}
                            alt="aboutImage"
                        /> : null
                    }
                    <Form.Control
                        type="file"
                        onChange={(e) => fileUploadHandler(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = "Enter Title"; }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = "Enter Description"; }}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
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
