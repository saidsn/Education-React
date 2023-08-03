import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';

const TitleCreate = () => {

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [title, setTitle] = useState([]);
    const [name, setName] = useState();

    const getAllTitle = async () => {
        await axios.get(`${url}/api/Title/GetAll`)
            .then((res) => {
                setTitle(res.data);
            });
    };

    useEffect(() => {
        getAllTitle();
    }, []);

    const newTitle = {
        name
    };

    const CreateTitle = async (e) => {
        e.preventDefault();
        await axios.post(`${url}/api/Title/Create`, newTitle)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Title Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Title not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/TitleTable');
    };


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Create Title</h2>
            <Form onSubmit={(e) => CreateTitle(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = "Enter Name"}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit" >
                    Create
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

export default TitleCreate;
