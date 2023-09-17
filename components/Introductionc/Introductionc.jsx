import "./Introduction.css";
import ProductItem from "../ProductItem/ProductItem";

const Introductionc = ({title , items , desc , category}) => {
    let itemss = null;
    let categoryy = [];
    let route = null;

    items == undefined ? itemss = [] : itemss = items; 
    category == undefined ? categoryy = [] : categoryy = category;



    route = categoryy.title + "/"

    while (categoryy.parent != null){
        route = route + categoryy.parent.title + "/";
        categoryy = categoryy.parent;
    }




    return(
        <div className="container">
            <div className="introduction-header">
                <p className="introduction-way">{route}</p>
                <p className="introduction-desc">
                    {desc}
                </p>
                <p className="introduction-title">
                    {title}
                </p>
            </div>
            <div className="introduction-wrapper">
                {itemss.map((item)=>(
                    <ProductItem title={item.title} desc={item.description} src={"http://rahvin.ir" + item.cover_file} slug={item.slug} clas={item.class} />
                ))}
            </div>
        </div>
    )
}

export default Introductionc;