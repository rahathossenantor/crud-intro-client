import { Link } from "react-router-dom";
import "./App.css";

function App() {

  const createUser = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const user = { name, email };

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }

  }

  return (
    <>
      <h1>Crud Intro</h1>
      <form onSubmit={createUser}>
        <input type="text" name="name" /><br />
        <input type="email" name="email" /><br />
        <input type="submit" value="Ceate user" />
      </form><br />
      <Link to="/users"><button>See users</button></Link>
    </>
  )
}

export default App;
