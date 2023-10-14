import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const usersData = useLoaderData();

    const deleteUser = async (userId) => {
        console.log(userId);
        fetch(`http://localhost:5000/users/${userId}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                alert("User deleted successfully!");
                window.location.reload();
            }
        })
        .catch((err) => console.error(err));
    };

    return (
        <div>
            <h2>Toatal users: {usersData.length}</h2>
            {
                usersData.map((user) => <p key={user._id}>{user.name}, {user.email}&nbsp; &nbsp;
                <button onClick={() => deleteUser(user._id)}>Delete</button>
                </p>)
            }
            <br />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Users;