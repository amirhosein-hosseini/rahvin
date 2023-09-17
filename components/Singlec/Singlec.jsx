import "./Singlec.css";
import Image from "next/image";
import ProductItem from "../ProductItem/ProductItem";
import { useRef } from "react";

const Singlec = ({title , desc , files = null , slug , keyword , related , cover , body , banner}) =>{
    let bannery = null;
    let covery = null;
    banner == undefined ? bannery = "" : bannery = "http://rahvin.ir" + banner;
    cover == undefined ? covery = "" : covery = "http://rahvin.ir" + cover;

    console.log(body)

    return(
        <div className="container">
            <div className="single">
                <div className="single-left">
                    <div className="single-right-title">
                        <p>
                            {title}
                        </p>
                    </div>
                    <div className="single-way">
                        <p>
                            {slug}
                        </p>
                    </div>
                    <div className="single-right-one-image">
                        <Image src={covery} sizes="100vw" width={200} height={200} style={{width: '100%',height: 'auto',}} alt="image" />
                    </div>
                    <div className="single-desc">
                        <p>
                            {desc}
                        </p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: body }}></div>
                </div>
                <div className="single-right">
                    <div className="single-left-bar">
                        <div className="single-left-title">
                            <p>
                                مطالب پربازدید
                            </p>
                        </div>
                        <div className="single-left-item">
                            <p>
                                شهر بازی ها
                            </p>
                        </div>
                        <div className="single-left-item">
                            <p>
                                شهر بازی ها
                            </p>
                        </div>
                        <div className="single-left-item">
                            <p>
                                شهر بازی ها
                            </p>
                        </div>
                        <div className="single-left-item">
                            <p>
                                شهر بازی ها
                            </p>
                        </div>
                        <div className="single-left-item">
                            <p>
                                شهر بازی ها
                            </p>
                        </div>
                    </div>
                    <div className="single-left-banner">
                        <Image src={bannery} sizes="100vw" width={200} height={200} style={{width: '100%',height: 'auto',}} alt="image" />
                    </div>
                </div>
            </div>
            <div className="single-related">
                <div className="single-related-title">
                    <p>
                        مطالب مرتبط
                    </p>
                </div>
                <div className="single-related-wrapper">
                    {related.map((item)=>(
                        <ProductItem title={item.title} desc={item.description} src={"http://rahvin.ir/"+item.cover_file} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Singlec;