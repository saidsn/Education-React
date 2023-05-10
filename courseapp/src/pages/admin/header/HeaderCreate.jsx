import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from "sweetalert2";

function HeaderCreate() {

    const url = 'https://localhost:7184';

    const [header, setHeader] = useState([]);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();

    const getAllHeader = async () => {
        await axios.get(`${url}/api/Header/GetAll`)
            .then((res) => {
                setHeader(res.data);
            });
    };

    useEffect(() => {
        getAllHeader();
    }, []);

    const CreateHeader = async () => {
        await axios
            .post(`${url}/api/Header/Create`,
                {
                    Image: image,
                    Title: title
                })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Header Created',
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
                    title: 'Header not Created',
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
    }

    const base64Img = (file) => {
        getBase64(file).then((result) => {
            setImage(result);
        });
    }

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Header</h2>
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
                        alt="header image"
                    />
                    <Form.Control type="file" onChange={(e) => base64Img(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Button variant="outline-primary" type="submit" onClick={() => CreateHeader()}>
                    Create
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

export default HeaderCreate;

