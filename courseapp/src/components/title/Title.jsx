import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Title(props) {

    const baseUrl = "https://localhost:7184";

    const [title, setTitle] = useState([]);

    async function getAllTitle(){
        await axios.get(`${baseUrl}/api/Title/GetAll`).then((res)=>{
            return setTitle(res.data)
        })
    };


    useEffect(()=>{
        getAllTitle();
    },[]);
 

    



    return (
        <div className="popular title_section" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_title text-center">

                            {
                                title.filter((t)=>t.name === props.sectionTitle).map((title,index)=>{
                                    return(
                                        <h1 key={index}>{title.name}</h1>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title;
 