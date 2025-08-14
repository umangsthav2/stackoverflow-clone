import mockUsers from "../data/mockUsers";
import UserCard from "../common/UserCard";

export default function Users() {
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
