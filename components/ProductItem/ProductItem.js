import Image from "next/image";
import "./ProductItem.css";
import productimage from "../../public/prductimage.png";
import Button from "../Button/Button";


const ProductItem = ({title , desc , src}) => {
    return(
        <div className="product-item">
            <div className="product-item-image">
                <Image src={src} sizes="100vw" width={200} height={200} style={{width: '100%', height: 'auto',}} alt="image" />
            </div>
            <div className="product-topic">
                <p>
                    {title}
                </p>
            </div>
            <div className="product-desc">
                <p>
                    {desc}
                </p>
            </div>
            <Button>
                مطالعه کامل
            </Button>
        </div>
    )
}

export default ProductItem;