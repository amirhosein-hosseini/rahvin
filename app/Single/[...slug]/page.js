"use client"
import axios from "axios";
import Singlec from "@/components/Singlec/Singlec"
import { useEffect, useState } from "react";


export default function Page({ params }) {
    const [blog , setBlog] = useState([])
    const [rela , setRela] = useState([])
    const url = decodeURIComponent(`http://rahvin.ir/api/v1/blogs/${params.slug}`)

    useEffect(()=>{
        axios.get(url)
        .then(function (response) {
            // handle success
            setBlog(response.data.data.blog)
            setRela(response.data.data.closeBlog)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])
    const banner =  blog.banner_file;
    const cover =  blog.cover_file;

    return(
        <>
            <Singlec title={blog.title} desc={blog.description} slug={blog.slug} keyword={blog.keyword} related={rela} body={blog.body} cover={cover} banner={banner}/>
        </>
    ) 
}