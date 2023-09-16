"use client"
import "./Header.css"
import Image from "next/image";
import Link from "next/link";
import NavigationItem from "./NavigationItem/NavigationItem";
import React ,{ useRef, useState } from "react";
import DropDown from "../DropDown/DropDown";
import MobileDropDown from "../MobileDropDown/MobileDropDown";

const Header = () => {
    var [navShow , setNavshow] = useState(false);
    const dropdownshow = useRef()


    const NavigationItems = [
        {href: "/" , text: "خانه"}
        ,
        {text: "معرفی"}
        ,
        {href: "/Podcast" , text: "پادکست"}
        ,
        {href: "/About" , text: "درباره ما"}
        ,
        {href: "/Contact" , text: "ارتباط باما"}
    ]
    const NavShow = () => {
        setNavshow(!navShow)
        document.body.style = "visibility:visable;height:100vh;width:100vw;overflow:hidden";
    }
    const NavClose = () => {
        setNavshow(!navShow)
        document.body.style = "visibility:visable;height:initial;width:100%;overflow-x:hidden";
    }

    const IntroductionNavshow = () => {
        document.getElementById("dropdownshow").style = "display:block"
    }
    const IntroductionNavdelete = () => {
        document.getElementById("dropdownshow").style = "display:none" 
    }


    return(
            <>
                <div className="nav">
                    <div className="container">
                        <div className="nav-wrapper">
                            <nav>
                                <div className="container">
                                    <div className="nav-icon-wrapper">
                                        <div className="nav-icon" onClick={() => NavShow()}>                       
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor"   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="3" y1="12" x2="21" y2="12" />
                                                <line x1="3" y1="6" x2="21" y2="6" />
                                                <line x1="3" y1="18" x2="21" y2="18" />
                                            </svg>
                                        </div>
                                        <div className="logo-two">
                                            <Link href="/">
                                                <Image src={"/little-logo.png"} fill sizes="(max-with:183px)" alt="logo"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${navShow ? "active" : ""} nav-bgoverlay`} onClick={() => NavClose()}></div>
                                <ul className={`${navShow ? "show" : ""} nav-list`}>
                                    <div className="nav-close" onClick={() => NavClose()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <div className="nav-list-wrapper">
                                        {NavigationItems.map((item)=>(
                                            item.text !== "معرفی" ? 
                                            <div className="nav-item-wrapper">
                                                <NavigationItem text={item.text} oncli={() => NavClose()}><Link href={item.href} className="nav-link" >{item.text}</Link></NavigationItem>
                                            </div> : 
                                            <div className="nav-item-wrapper" onMouseEnter={() => IntroductionNavshow()} onMouseLeave={() => IntroductionNavdelete()}>
                                                <NavigationItem text={item.text}>{item.text}</NavigationItem>
                                                <MobileDropDown mobiledropclass={"mobiledrop"}/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="logo">
                                        <Link href="/">
                                            <Image src={"/logo.png"} fill sizes="(max-with:183px)" alt="logo"/>
                                        </Link>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="headerdropdown" ref={dropdownshow} id="dropdownshow">
                    <div className="dropdown">
                        <div className="container">
                            <div className="dropdown-wrapper" onMouseEnter={() => IntroductionNavshow()} onMouseLeave={() => IntroductionNavdelete()}>
                                <DropDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Header;