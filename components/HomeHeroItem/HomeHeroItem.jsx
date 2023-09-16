"use client"
import "./HomeHeroItem.css";
import Image from "next/image";
import heroimage from "../../public/desktop-hero-image.png";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const HomeHeroItem = ({title , desc , slug , date , src , clas}) => {

    console.log(clas)
    return(
        <>
                <div className="home-carousel-item">
                    <div className="carousel-item-image">
                        <Image src={src} sizes="100vw" width={200} height={200} style={{width: '100%',height: 'auto',}} alt="image" />
                    </div>
                    <div className="carousel-item-desc">
                        <div className="carousel-item-desc-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="carousel-item-desc-desc">
                            <p>
                                {desc}
                            </p>
                        </div>
                        <div className="carousel-item-desc-footer">
                            <div className="carousel-item-desc-footer-way">
                                <p>
                                    {slug}
                                </p>
                                <p>
                                    {date}
                                </p>
                            </div>
                            <div className="carousel-item-desc-footer-button">
                                {clas == "App\\Models\\Blog" ? 
                                <Link href={`/Single/${slug}`}>
                                    <Button>
                                        مطالعه کامل
                                    </Button>
                                </Link> : 
                                <Button>مطالعه کامل  </Button>
                                }
                                {/* <Link href={`/Single/${slug}`}>
                                    <Button>
                                        مطالعه کامل
                                    </Button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default HomeHeroItem;