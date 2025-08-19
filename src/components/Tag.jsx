import { Link } from "react-router-dom";

export default function Tag(props) {
    return (
        <>
            <Link to={`/tags?tagname=${props.tagname}`}>
                <span className="hover:bg-blue-700 hover:text-white transition bg-blue-100 min-w-[10px] w-auto text-blue-800 px-3 py-1 rounded-full text-sm"> {props.tagname}</span>
            </Link>
        </>
    );
}
