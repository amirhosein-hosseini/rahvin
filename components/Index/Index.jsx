"use client"
import ProductItem from "../ProductItem/ProductItem";
import Slideshow from "../Slider/Slider";
import Link from "next/link";
import "./Index.css"
import DesktopHero from "../DesktopHero/DesktopHero";
import { useEffect, useState } from "react";
import axios from "axios";



const Index = () => {

    const [slider , setSliders] = useState([])

    useEffect(()=>{
        axios.get('http://rahvin.ir/api/v1/categories/favorite')
        .then(function (response) {
            // handle success
            setSliders(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])




    return(
        <div className="container" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
            <DesktopHero />
            {slider.map((item)=>(
                <div className="home-slideshow-wrapper" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
                    <div className="home-slideshow-topic">
                        <p className="home-slideshow-title">
                            {item.title}
                        </p>
                        <Link href={"/"} className="home-slideshow-link">مشاهده همه</Link>
                    </div>
                    <Slideshow>
                        {item.items.map((itemy)=>(
                            <ProductItem title={itemy.title} desc={itemy.description} src={"http://rahvin.ir"+itemy.cover_file}/>
                        ))}
                    </Slideshow>
                </div>
            ))}
        </div>
    )
}

export default Index;