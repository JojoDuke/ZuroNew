import Image from "next/image"
import closeIcon from '../public/close.png';
import zuroLogo from '../public/zuro_logo.png';
const ProgressNav = (props) => {
    const {progress, alt} = props
    return(
        <nav className="flex flex-row items-center justify-between px-20 pt-5 bg-green">
        <Image
            src={zuroLogo}
            alt="close_icon"
            width="70px"
            height="20px"
        />
        <Image
            src={progress}
            alt={alt}
            width="238px"
            height="19px"
        />
        <Image
            src={closeIcon}
            className="invert cursor-pointer"
            alt="close_icon"
            width="12px"
            height="12px"
        />
    </nav>
    )
}

export default ProgressNav