"use client"
import Introductionc from "@/components/Introductionc/Introductionc";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Introduction({ params }){
    const [blogs , setBlogs] = useState([])
    const url = decodeURIComponent(`http://rahvin.ir/api/v1/categories/${params.slug}`)


    useEffect(()=>{
        axios.get(url)
        .then(function (response) {
            // handle success
            setBlogs(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])


    return(
        <Introductionc title={blogs.title} items={blogs.items} desc={blogs.description} category={blogs.parent}/>
    )
}



