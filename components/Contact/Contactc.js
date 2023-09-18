"use client"
import "./Contactc.css";
import Button from "../Button/Button";
import Image from "next/image";
import Instagram from "../../public/instagram1.png";
import Linkedin from "../../public/linkedin1.png";
import Telegram from "../../public/telegram1.png";
import Youtube from "../../public/youtube1.png";
import { useState } from "react";
import axios from "axios";

const Contactc = () =>{


    const [data , setData] = useState({
        name : "",
        email : "",
        topic : "",
        organization : "",
        description : ""
    })

    const handlechnage = (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [e.target.name]:value
        })
    }

    const handleSendContact = ()=>{
        let ourUserData = {
            name : data.name,
            email : data.email,
            subject : data.topic,
            company_name : data.organization,
            message : data.description
        }

        axios.post("http://172.16.16.210:7500/api/v1/contact-us", ourUserData).then((response) => {
            console.log(response.status, response.massage);
        });
    }


    return(
        <div className="contact-page">
            <div className="container">
                <div className="contact-page-titles">
                    <p className="contact-page-first-title">
                        خوشحال میشیم نظراتتون رو بشنویم
                    </p>
                    <p className="contact-page-second-title">
                        با ما در ارتباط باشید
                    </p>
                </div>
                <div className="contact-page-wrapper">
                    <form>
                        <div className="form-group">
                            <div className="form-group-two">
                                <input type="text" name="name" id="name" placeholder="نام" onChange={handlechnage}></input>
                                <input type="email" name="email" id="email" placeholder="پست الکترونیکی" onChange={handlechnage}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group-two">
                                <input type="text" name="topic" id="topic" placeholder="موضوع" onChange={handlechnage}></input>
                                <input type="text" name="organization" id="organization" placeholder="سازمان ( غیر ضروری )" onChange={handlechnage}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="متن پیام" name="description" id="description" onChange={handlechnage}></textarea>
                        </div>
                        <div className="submit">
                            <div className="submit-button">
                                <Button handleclick={handleSendContact}>ارسال</Button>
                            </div>
                            <div className="submit-social">
                                <div className="submit-social-items">
                                    <div className="submit-social-item">
                                        <Image src={Instagram} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                                    </div>
                                    <div className="submit-social-item">
                                        <Image src={Linkedin} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                                    </div>
                                    <div className="submit-social-item">
                                        <Image src={Telegram} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                                    </div>
                                    <div className="submit-social-item">
                                        <Image src={Youtube} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                                    </div>
                                </div>
                                <div className="submit-or">
                                    <p>
                                        یا
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactc;