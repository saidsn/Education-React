import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';


function ContactUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [contact, setContact] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const getContact = async () => {
        await axios.get(`${url}/api/Contact/Get?id=${id}`)
            .then((res) => {
                setContact(res.data);
                setName(res.data.name);
                setEmail(res.data.email);
                setMessage(res.data.message);
            });
    }

    useEffect(() => {
        getContact()
    }, []);

    const newContact = {
        name,
        email,
        message
    }

    const UpdateContact = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/api/Contact/Update/${id}`, newContact)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Contact Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Contact not Updated!",
                });
                console.log(err);
            });

            navigate('/ContactTable');
    }


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Contact</h2>
            <Form onSubmit={(e) => UpdateContact(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = name; }}
                        placeholder={name}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = email; }}
                        placeholder={email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        type="text"
                        name={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = message; }}
                        placeholder={message}
                    />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Update
                </Button>
                <Link to="/ContactTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default ContactUpdate;
