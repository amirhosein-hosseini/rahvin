import Image from "next/image";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-social">
                        <p className="footer-social-title">
                            رَهـ وین در شبکه های اجتماعی 
                        </p>
                        <div className="footer-social-items">
                            <div className="footer-social-item">
                                <a href="#">
                                    <Image src={"/instagram1.png"} width={71} height={71} alt="instagram.png" />
                                </a>
                            </div>
                            <div className="footer-social-item">
                                <a href="#">
                                    <Image src={"/telegram1.png"} width={71} height={71} alt="telegram.png" />
                                </a>
                            </div>
                            <div className="footer-social-item">
                                <a href="#">
                                    <Image src={"/linkedin1.png"} width={71} height={71} alt="linkedin.png" />
                                </a>
                            </div>
                            <div className="footer-social-item">
                                <a href="#">
                                    <Image src={"/youtube1.png"} width={71} height={71} alt="youtube.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <p className="footer-links-title">
                            لینک های مفید   
                        </p>
                        <div className="footer-links-items">
                            <Link href="/About" className="footer-links-item">
                                درباره ما   
                            </Link>
                            <Link href="/Contact" className="footer-links-item">
                                تماس با ما                            
                            </Link>
                            <Link href="#" className="footer-links-item">
                                آخرین مطالب                            
                            </Link>
                        </div>
                    </div>
                    <div className="footer-about">
                        <p className="footer-about-title">
                            درباره رَهـ وین  
                        </p>
                        <p className="footer-about-desc">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;