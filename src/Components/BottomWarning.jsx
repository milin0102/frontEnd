import {Link} from "react-router-dom"
export default function BottomWarning({text , linkText ,link}){
    return <div className="p-2 text-base flex justify-center">
        <div>{text}</div>
        <Link className="pl-1" to={link}>{linkText}</Link>
    </div>

}