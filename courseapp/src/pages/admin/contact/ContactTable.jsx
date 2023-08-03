import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';


const ContactTable = () => {

    let count = 1;

    const url = 'https://localhost:7184';

    const [contact, setContact] = useState([]);

    const getAllContact = async () => {
        await axios.get(`${url}/api/Contact/GetAll`)
            .then((res) => {
                setContact(res.data);
            });
    };

    useEffect(() => {
        getAllContact();
    }, []);

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card my-5">
                    <h2 className="mx-auto">Contact Table</h2>
                    <div className='d-flex justify-content-between'>
                        <Link to="/dashboard">
                            <button className="btn btn-success my-2" style={{ float: "right" }}>Dashboard</button>
                        </Link>
                    </div>
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Create Date</th>
                                <th>Update Date</th>
                                <th>Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contact.map((contact, index) => (
                                    <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                        <td>{count++}</td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: contact.name }}></td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: contact.email }}></td>
                                        <td className="py-1" dangerouslySetInnerHTML={{ __html: contact.message }}></td>
                                        <td>{moment(contact.createDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>{moment(contact.updateDate).format('DD-MM-YYYY HH:mm:ss')}</td>
                                        <td>
                                            <Link to={`/ContactUpdate/${contact.id}`}>
                                                <button className="btn btn-warning" style={{ marginRight: "15px" }}>Update</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ContactTable;
