import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';

function BannerUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [banner, setBanner] = useState([]);
    const [svg, setSvg] = useState();
    const [title, setTitle] = useState();

    const getBanner = async () => {
        await axios.get(`${url}/api/Banner/Get?id=${id}`)
            .then((res) => {
                setBanner(res.data);
                setSvg(res.data.image);
                setTitle(res.data.title);
            });
    };

    useEffect(() => {
        getBanner();
    }, []);

    const newBanner = {
        Image: svg,
        Title: title
    };

    const UpdateBanner = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/api/Banner/Update/${id}`, newBanner)
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Banner Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Banner not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/BannerTable');
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result.replace(/^data:.+;base64,/, ''));
            reader.onerror = (error) => reject(error);
        });
    };

    const base64Svg = (file) => {
        getBase64(file).then((result) => {
            setSvg(result);
        });
    };


    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Banner</h2>
            <Form onSubmit={(e) => UpdateBanner(e)}>
                <p>Image</p>
                <img
                    style={{
                        width: "200px",
                        height: "100px",
                        marginBottom: "10px",
                        borderRadius: "unset",
                    }}
                    src={`data:image/svg+xml;base64,${svg}`}
                    alt="bannerIamge"
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="file"
                        onChange={(e) => base64Svg(e.target.files[0])}
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
                <Link to="/BannerTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default BannerUpdate;
