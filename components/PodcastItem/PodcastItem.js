import "./PodcastItem.css";
import Image from "next/image";
import podcastImage from "../../public/podcast-image.png"
import PodcastButton from "./PodcastButton/PodcastButton";

const PodcastItem = ({title , desc , castbox , youtube , instagram , aparat , src}) => {
    return(
        <div className="podcast-item-wrapper">
            <div className="podcast-item-image">
                <Image src={src} sizes="100vw" width={200} height={200} style={{width: '100%',height: 'auto',}} alt="image" />
            </div>
            <div className="podcast-item-desc">
                <div className="podcast-item-desc-title">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="podcast-item-desc-desc">
                    <p>
                        {desc}
                    </p>
                </div>
                <div className="podcast-item-desc-items">
                    <PodcastButton type={"castbox"} href={castbox}>
                        مشاهده در کست باکس
                    </PodcastButton>
                    <PodcastButton type={"youtube"} href={youtube}>
                        مشاهده در یوتیوب
                    </PodcastButton>
                    <PodcastButton type={"instagram"} href={instagram}>
                        مشاهده در اینستاگرام
                    </PodcastButton>
                    <PodcastButton type={"aparat"} href={aparat}>
                        مشاهده در آپارات
                    </PodcastButton>
                </div>
            </div>
        </div>
    )
}

export default PodcastItem;