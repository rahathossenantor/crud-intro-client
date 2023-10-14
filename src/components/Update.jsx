import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData();

    const updateUser = async (event) => {
        event.preventDefault();
        const formData = event.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const updatedUser = { name, email };

        try {
            const res = await fetch(`http://localhost:5000/users/${user?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            })
            const data = await res.json();
            if (data.modifiedCount > 0) {
                console.log("User updated successfully!");
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h2>Updating information of {user?.name}</h2>
            <form onSubmit={updateUser}>
                <input type="text" name="name" defaultValue={user?.name} /><br />
                <input type="email" name="email" defaultValue={user?.email} /><br />
                <input type="submit" value="Update" />
            </form><br />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Update;