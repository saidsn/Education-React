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
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getAllService = async () => {
        await axios.get(`${url}/api/Service/GetAll`)
            .then((res) => {
                setService(res.data);
            });
    }

    useEffect(() => {
        getAllService();
    }, []);

    const newService = {
        svg,
        title,
        description
    }

    const CreateService = async () => {
        await axios
            .post(`${url}/api/Service/Create`, newService)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Service Created',
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
                    title: 'Service not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/ServiceTable');
    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result.replace(/^data:.+;base64,/, ''));
            reader.onerror = (error) => reject(error);
        });
    }

    const base64Svg = async (file) => {
        getBase64(file)
            .then(base64 => {
                setSvg(base64);
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Service</h2>
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
                        src={`data:image/svg+xml;base64,${svg}`}
                        alt="serviceSvg"
                    />
                    <Form.Control type="file" onChange={(e) => base64Svg(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Button variant="outline-primary" type="submit" onClick={() => CreateService()}>
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
