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

    const searchBarHandle = (e) => {
        const data = e.target.value;

        setSearchBar(data)
    }

    const searchHandle = () =>{
        axios.get(`http://rahvin.ir/api/v1/global-search?keyword=${searchBar}`)
        .then(function (response) {
            // handle success
            console.log(response)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          return ()=>{
            controller.abort()
          }
    }

    return(
        <div>
            <div className="hero-title">
                <div className="hero-first-title">
                    <p>
                        رَهـ وین،  رسانه ای برای شهر و شهروند    
                    </p>
                </div>
                <div className="hero-second-title">
                    <p>
                        هر آنچه که برای زندگی بهتر در شهر قزوین به آن نیاز دارید    
                    </p>
                </div>
                <div className="hero-searchbar">
                    <input type="text" placeholder="دنبال کجا می گردید ؟" name="searchbar" id="searchbar" onChange={searchBarHandle}></input>
                    <Image src={"/searchbarimage.png"} width={54} height={54} alt="icon" onClick={searchHandle}/>
                </div>
            </div>
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