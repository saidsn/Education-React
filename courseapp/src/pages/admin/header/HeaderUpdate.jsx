import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';

function HeaderUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [header, setHeader] = useState([]);
    const [image, setImage] = useState();
    const [showImage, setShowImage] = useState(null);
    const [title, setTitle] = useState();

    const getHeader = async () => {
        await axios.get(`${url}/api/Header/GetById?id=${id}`)
            .then((res) => {
                setHeader(res.data);
                setImage(res.data.image);
                setTitle(res.data.title);
            });
    };

    useEffect(() => {
        getHeader()
    }, []);

    const newHeader = {
        photo: image,
        title: title
    };

    const UpdateHeader = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newHeader)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Header/Update/${id}`, formData, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Header Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Header not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            })

        navigate('/HeaderTable');
    };

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setShowImage(URL.createObjectURL(file));
    };

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Header</h2>
            <Form onSubmit={(e) => UpdateHeader(e)}>
                <p>Image</p>
                {
                    image !== null ?
                        <img
                            style={{
                                width: "200px",
                                height: "100px",
                                marginBottom: "10px",
                                borderRadius: "unset",
                            }}
                            src={`data:image/png;base64,${image}`}
                            alt=""
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

                <Button variant="outline-primary" type="submit">
                    Update
                </Button>
                <Link to="/HeaderTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default HeaderUpdate;
