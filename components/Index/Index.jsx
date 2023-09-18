"use client"
import ProductItem from "../ProductItem/ProductItem";
import Slideshow from "../Slider/Slider";
import Link from "next/link";
import "./Index.css"
import DesktopHero from "../DesktopHero/DesktopHero";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";



const Index = () => {

    let podcastss = [];

    const [slider , setSliders] = useState([])
    const [podcasts , setPodcasts] = useState([])
    const [search , setSearch] = useState([])
    const [searchBar , setSearchBar] = useState("")

    useEffect(()=>{
        axios.get('http://172.16.16.210:7500/api/v1/categories/favorite')
        .then(function (response) {
            // handle success
            setSliders(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])
    useEffect(()=>{
        axios.get('http://172.16.16.210:7500/api/v1/podcasts')
        .then(function (response) {
            // handle success
            setPodcasts(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])


    podcasts == undefined ? podcastss = [] : podcastss = podcasts;

    console.log(podcastss)

    const searchBarHandle = (e) => {
        const data = e.target.value;

        setSearchBar(data)
    }

    const searchHandle = () =>{
        axios.get(`http://172.16.16.210:7500/api/v1/global-search?keyword=${searchBar}`)
        .then(function (response) {
            // handle success
            setSearch(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          return ()=>{
            controller.abort()
          }
    }
    const blogssearch = search.blogs;
    const podcastsearch = search.podcasts;



    return(
        <div className="container" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
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
            {blogssearch !== undefined ? 
                            <div className="home-slideshow-wrapper" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
                                <div className="home-slideshow-topic">
                                    <p className="home-slideshow-title">
                                        بلاگ
                                    </p>
                                </div>
                                <Slideshow>
                                    {blogssearch.map((item)=>(
                                        <ProductItem title={item.title} desc={item.description} src={"http://172.16.16.210:7500"+item.cover_file} slug={item.slug} clas={item.class}/>
                                    ))}
                                </Slideshow>
                            </div> : <div></div>
            }
            {podcastsearch !== undefined ? 
                            <div className="home-slideshow-wrapper" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
                                <div className="home-slideshow-topic">
                                    <p className="home-slideshow-title">
                                        پادکست
                                    </p>
                                </div>
                                <Slideshow>
                                    {podcastsearch.map((item)=>(
                                        <ProductItem title={item.title} desc={item.description} src={"http://172.16.16.210:7500"+item.cover_file} slug={item.slug} clas={item.class}/>
                                    ))}
                                </Slideshow>
                            </div> : <div></div>
            }
            <DesktopHero />
            {slider.map((item)=>(
                <div className="home-slideshow-wrapper" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
                    <div className="home-slideshow-topic">
                        <p className="home-slideshow-title">
                            {item.title}
                        </p>
                        <Link href={`/Blog/${item.slug}`} className="home-slideshow-link">مشاهده همه</Link>
                    </div>
                    <Slideshow>
                        {item.items.map((itemy)=>(
                            <ProductItem title={itemy.title} desc={itemy.description} src={"http://172.16.16.210:7500"+itemy.cover_file} slug={itemy.slug} clas={itemy.class}/>
                        ))}
                    </Slideshow>
                </div>
            ))}
                <div className="home-slideshow-wrapper" style={{"margin-bottom" : "60px","direction" : "rtl" }}>
                    <div className="home-slideshow-topic">
                        <p className="home-slideshow-title">
                            پادکست
                        </p>
                        <Link href={`/Podcast`} className="home-slideshow-link">مشاهده همه</Link>
                    </div>
                    <Slideshow>
                        {podcastss.map((item) => (
                            <ProductItem title={item.title} desc={item.description} src={"http://172.16.16.210:7500"+item.cover_file} slug={item.slug} clas={item.class}/>
                        ))}
                    </Slideshow>
                </div>

        </div>
    )
}

export default Index;