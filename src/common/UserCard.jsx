

import { Link } from "react-router-dom";

export default function UserCard({ id, avatar, name, score, tags }) {
    return (
        <>
            <span className=" border-2 flex-wrap  inline-flex p-2 gap-15 items-center">
                <span className="avatar-container shrink-0 h-20 rounded-lg overflow-hidden">
                    <img className="h-full" src={avatar} alt="" />
                </span>
                <span className="detail-container p-3">
                    <h1 className="username text-2xl font-bold text-blue-600"><Link to={`/user?id=${id}`}>{name}</Link></h1>
                    <h1 className="username text-lg"><Link>{score}</Link></h1>
                    {
                        tags.map(
                            (user_tags) => <span className="bg-blue-100 text-blue-800 mx-1 px-3 py-1 rounded-full text-sm">{user_tags}</span>
                        )
                    }
                </span>
            </span>
        </>
    );
}
