import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Header(props) {

    const baseUrl = "https://localhost:7184";

    const [header, setHeader] = useState([]);
    
    async function getAllheader(){
        await axios.get(`${baseUrl}/api/Header/GetAll`).then((res)=>{
            return setHeader(res.data)       
        })
    };
    
    useEffect(()=>{
        getAllheader();
    },[]);





    return (
        <div className="home">
            <div className="home_background_container prlx_parent">
                <div className="home_background prlx" style={{ background: `url(${process.env.PUBLIC_URL}/images/courses_background.jpg.webp)` }}></div>
            </div>
            <div className="home_content">
                {
                    header.filter((h)=>h.name === props.sectionHeader).map((header, index)=>{
                        return(
                            <h1 key={index}>{header.name}</h1>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Header;
