"use client"
import "./DesktopHero.css";
import Carousel from "../Carousel/Carousel";
import HomeHeroItem from "../HomeHeroItem/HomeHeroItem";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const DesktopHero = () => {
    const [sliders , setSliders] = useState([])
    const [searchBar , setSearchBar] = useState("")

    useEffect(()=>{
        const controller = new AbortController();

        axios.get('http://rahvin.ir/api/v1/sliders', {
            signal: controller.signal
    })
        .then(function (response) {
            // handle success
            setSliders(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          return ()=>{
            controller.abort()
          }
    },[])



    return(
        <div>
            <Carousel>
                {sliders.map((item)=>(
                    <HomeHeroItem title={item.slider_item.title} desc={item.slider_item.description} slug={item.slider_item.slug} date={item.slider_item.created_at} src={"http://rahvin.ir"+item.slider_item.cover_image
                    } clas={item.class}/>
                ))}
            </Carousel>
        </div>
    )
}

export default DesktopHero;