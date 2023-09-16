import Image from "next/image";
import "./Aboutc.css";
import aboutimage from "../../public/aboutimage.png";

const Aboutc = () => {
    return(
        <div className="about">
            <div className="about-wrapper">
                <div className="about-title-wrapper">
                    <p className="about-title">
                        " رَهـ وین"
                    </p>
                </div>
                <div className="container">
                    <div className="about-page-items">
                        <div className="about-page-item">
                            <div className="about-page-item-desc">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                </p>
                            </div>
                            <div className="about-page-item-image">
                                <Image src={aboutimage} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                            </div>
                        </div>
                        <div className="about-page-item reverse">
                            <div className="about-page-item-image">
                                <Image src={aboutimage} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                            </div>
                            <div className="about-page-item-desc">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                </p>
                            </div>
                        </div>
                        <div className="about-page-item">
                            <div className="about-page-item-desc">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                </p>
                            </div>
                            <div className="about-page-item-image">
                                <Image src={aboutimage} sizes="100vw" style={{width: '100%',height: 'auto',}} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutc;