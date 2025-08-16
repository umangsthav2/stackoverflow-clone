import mockUsers from "../data/mockUsers";
import UserCard from "../components/UserCard";

export default function Users() {
    document.title = "Users | Stackoverflow Clone"
    return (
        <>
            {
                mockUsers.map(
                    (user) => <UserCard key={user.id} {...user} />
                )
            }
        </>
    );
}
