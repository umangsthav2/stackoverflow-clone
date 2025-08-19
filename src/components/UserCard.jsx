

import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function UserCard({ id, avatar, name, score, tags }) {
    return (
        <>
            <span className="md:inline-flex flex shadow-md rounded-lg flex-wrap  p-2 m-2 gap-15 items-center xs:justify-start justify-center">
                <span className="avatar-container shrink-0 h-20 rounded-lg overflow-hidden">
                    <img className="h-full" src={avatar} alt="" />
                </span>
                <span className="detail-container flex flex-col xs:justify-start justify-center p-3">
                    <h1 className="username text-2xl font-bold text-blue-600"><Link to={`/user?id=${id}`}>{name}</Link></h1>
                    <h1 className="username text-lg"><Link>{score}</Link></h1>
                    <span className="tag-container flex gap-3">
                        {
                            tags.map(
                                (user_tags) => <Tag tagname={user_tags} />
                            )
                            // tags.map(
                            //     (user_tags) => <span key={null} className="bg-blue-100 text-blue-800 mx-1 px-3 py-1 rounded-full text-sm">{user_tags}</span>
                            // )
                        }
                    </span>
                </span>
            </span>
        </>
    );
}
