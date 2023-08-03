import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';

const ServiceUpdate = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [service, setService] = useState([]);
    const [svg, setSvg] = useState();
    const [showSvg, setShowSvg] = useState(null);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getService = async () => {
        await axios.get(`${url}/api/Service/GetById?id=${id}`)
            .then((res) => {
                setService(res.data);
                setSvg(res.data.image);
                setTitle(res.data.title);
                setDescription(res.data.description);
            });
    };

    useEffect(() => {
        getService();
    }, []);

    const newService = {
        photo: svg,
        title: title,
        description: description
    };

    const UpdateService = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newService)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Service/Update/${id}`, formData, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Service Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Service not Updated',
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
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Service</h2>
            <Form onSubmit={(e) => UpdateService(e)}>
                <p>Image</p>
                {
                    svg !== null ?
                        <img
                            style={{
                                width: "200px",
                                height: "100px",
                                marginBottom: "10px",
                                borderRadius: "unset",
                            }}
                            src={`data:image/svg+xml;base64,${svg}`}
                            alt="serviceSvg"
                        /> : null
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="file"
                        onChange={(e) => fileUploadHandler(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name={title}
                        placeholder={title}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name={description}
                        placeholder={description}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Update
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

export default ServiceUpdate;
