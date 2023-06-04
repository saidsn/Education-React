import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';

function TitleUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [title, setTitle] = useState([]);
    const [name, setName] = useState();

    const getTitle = async () => {
        await axios.get(`${url}/api/Title/Get?id=${id}`)
            .then((res) => {
                setTitle(res.data);
                setName(res.data.name);
            });
    };

    useEffect(() => {
        getTitle()
    }, []);

    const newTitle = {
        name
    };

    const UpdateTitle = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/api/Title/Update/${id}`, newTitle)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Title Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Title not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/TitleTable');
    };


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Title</h2>
            <Form onSubmit={(e) => UpdateTitle(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name={name}
                        placeholder={name}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Update
                </Button>
                <Link to="/TitleTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default TitleUpdate;
