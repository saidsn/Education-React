import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';


function AboutUpdate() {

    const { id } = useParams();

    const url = 'https://localhost:7184';

    const [about, setAbout] = useState([]);
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const getAbout = async () => {
        await axios.get(`${url}/api/About/Get?id=${id}`)
            .then((res) => {
                setAbout(res.data);
                setImage(res.data.image);
                setTitle(res.data.title);
                setDescription(res.data.description);
            });
    };

    useEffect(() => {
        getAbout()
    }, []);

    const UpdateAbout = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/api/About/Update/${id}`,
            {
                Image: image,
                Title: title,
                Description: description
            })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'About Updated',
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
                    title: 'About not Updated',
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

            reader.onload = () => resolve(reader.result.replace(/^data:.+;base64,/, ''));
            reader.onerror = (err) => reject(err);
        });
    };

    const base64Img = async (file) => {
        getBase64(file)
            .then((result) => {
                setImage(result);
            });
    };

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update About</h2>
            <Form onSubmit={(e) => UpdateAbout(e)}>
                <p>Image</p>
                <img
                    style={{
                        width: "200px",
                        height: "100px",
                        marginBottom: "10px",
                        borderRadius: "unset",
                    }}
                    src={`data:image/jpeg;base64,${image}`}
                    alt=""
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
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

                <Button variant="outline-primary" type="submit">
                    Update
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

export default AboutUpdate;