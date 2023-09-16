import "./PodcastButton.css" 
import Link from "next/link";

const PodcastButton = ({type , children , href}) => {
    return(
        <Link href={href}>
            <button className={`${type} podcastbutton`}>
                {children}
            </button>
        </Link>
    )
}

export default PodcastButton;