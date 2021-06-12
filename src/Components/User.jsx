import { useEffect, useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            const data = await response.json();
            setLoading(false);
            setProfile(data);
        }, 3000);
    }, []);

    return (
        <div className="user">
            <h2>User Details</h2>

            {profile && (
                <div className="profile">
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}
            {loading && <SkeletonProfile theme="dark" />}
        </div>
    );
};

export default User;
