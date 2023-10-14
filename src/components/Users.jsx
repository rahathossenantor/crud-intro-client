import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const data = useLoaderData();
    const [usersData, setUsersData] = useState(data);

    const deleteUser = async (userId) => {
        fetch(`http://localhost:5000/users/${userId}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                const remainingUsers = usersData.filter(user => user._id !== userId);
                setUsersData(remainingUsers);
                console.log("User deleted successfully!");
            }
        })
        .catch((err) => console.error(err));
    };

    return (
        <div>
            <h2>Toatal users: {usersData.length}</h2>
            {
                usersData.map((user) => <p key={user._id}>{user.name}, {user._id}, {user.email}&nbsp; &nbsp;
                <button onClick={() => deleteUser(user._id)}>Delete</button>&nbsp; &nbsp;
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                </p>)
            }
            <br />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Users;
