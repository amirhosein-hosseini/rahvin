import "./Introduction.css";
import ProductItem from "../ProductItem/ProductItem";

const Introductionc = () => {
    return(
        <div className="container">
            <div className="introduction-header">
                <p className="introduction-way">معرفی / اوغات فراغت / آخر هفته</p>
                <p className="introduction-desc">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را                 
                </p>
                <p className="introduction-title">
                    آخرین مطالب
                </p>
            </div>
            <div className="introduction-wrapper">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default Introductionc;