import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import axios from 'axios';

const SliderUpdate = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7184';

    const [slider, setSlider] = useState([]);
    const [image, setImage] = useState();
    const [showImage, setShowImage] = useState(null);
    const [title, setTitle] = useState();

    const getSlider = async () => {
        await axios.get(`${url}/api/Slider/GetById?id=${id}`)
            .then((res) => {
                setSlider(res.data);
                setImage(res.data.image);
                setTitle(res.data.title);
            });
    };

    useEffect(() => {
        getSlider()
    }, []);

    const newSlider = {
        photo: image,
        title: title
    };

    const UpdateSlider = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newSlider)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Slider/Update/${id}`, formData, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Slider Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Slider not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/SliderTable');
    };

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setShowImage(URL.createObjectURL(file));
    };

    return (
        <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
            <h2 className='my-5' style={{ textAlign: "center" }}>Update Slider</h2>
            <Form onSubmit={(e) => UpdateSlider(e)}>
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
                            alt="sliderImage"
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
                <Link to="/SliderTable">
                    <Button variant="outline-dark" type="submit" className='mx-2'>
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>

    )
}

export default SliderUpdate;
