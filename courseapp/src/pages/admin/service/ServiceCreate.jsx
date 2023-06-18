import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';


function ServiceCreate() {

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [service, setService] = useState([]);
    const [svg, setSvg] = useState();
    const [showSvg, setShowSvg] = useState(null);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getAllService = async () => {
        await axios.get(`${url}/api/Service/GetAll`)
            .then((res) => {
                setService(res.data);
            });
    };

    useEffect(() => {
        getAllService();
    }, []);

    const newService = {
        photo: svg,
        title: title,
        description: description
    };

    const CreateService = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newService)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/Service/Create`, formData, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Service Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Service not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/ServiceTable');
    };

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        setSvg(file);
        setShowSvg(URL.createObjectURL(file));
    };

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Service</h2>
            <Form onSubmit={(e) => CreateService(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Image</p>
                    {
                        showSvg !== null ?
                            <img
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    marginBottom: "10px",
                                    borderRadius: "unset",
                                }}
                                src={showSvg}
                                alt="serviceSvg"
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
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Title'}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Description'}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Create
                </Button>
                <Link to="/ServiceTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default ServiceCreate;
