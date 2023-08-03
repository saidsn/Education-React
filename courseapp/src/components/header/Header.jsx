import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Header = (props) => {

    const baseUrl = "https://localhost:7184";

    const [header, setHeader] = useState([]);

    async function getAllheader() {
        await axios.get(`${baseUrl}/api/Header/GetAll`).then((res) => {
            return setHeader(res.data)
        })
    };

    useEffect(() => {
        getAllheader();
    }, []);


    return (
        <>
            {
                header.filter((h) => h.title === props.sectionHeader).map((header, index) => {
                    return (
                        <div className="home" key={index} >
                            <div className="home_background_container prlx_parent">
                                <div className="home_background prlx" style={{ background: `url(data:image/png;base64,${header.image})` }}></div>

                            </div>
                            <div className="home_content">
                                <h1 key={index}>{header.title}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Header;
