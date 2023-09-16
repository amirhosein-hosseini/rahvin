import "./Singlec.css";
import Image from "next/image";
import ProductItem from "../ProductItem/ProductItem";

const Singlec = ({title , desc , files = null , slug , keyword , related}) =>{

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
                        <Image src={"/singleoneimage.png"} width={814} height={540} alt="image" />
                    </div>
                    <div className="single-desc">
                        <p>
                            {desc}
                        </p>
                    </div>
                    {/* <div className="single-right-two-image">
                        <div className="single-right-two-image-item">
                            <Image src={"/singleoneimage.png"} width={398} height={270} alt="image" />
                        </div>
                        <div className="single-right-two-image-item">
                            <Image src={"/singleoneimage.png"} width={398} height={270} alt="image" />
                        </div>
                    </div> */}
                    {/* <div className="single-desc">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ 
                        </p>
                    </div> */}
                    {/* <div className="single-right-one-image">
                        <Image src={"/singleoneimage.png"} width={814} height={540} alt="image" />
                    </div>
                    <div className="single-desc">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ 
                        </p>
                    </div>
                    <div className="single-right-intro">
                        <p>
                            نشانی فلان جا   
                        </p>
                        <p>
                            شبکه های اجتماعی
                        </p>
                        <p>
                            راه های ارتباطی
                        </p>
                        <p>
                            منابع                    
                        </p>
                    </div> */}
                </div>
                <div className="single-right">
                    <div className="single-left-bar">
                        {/* {keyword.map((item)=>(
                            <div className="single-left-title">
                                <p>
                                    {item}
                                </p>
                            </div>  
                        ))} */}
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
                        <Image src={"/singleoneimage.png"} width={286} height={286} alt="image" />
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