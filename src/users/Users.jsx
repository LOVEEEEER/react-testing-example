import {useEffect, useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return <div data-testid="users-page">
        {users.map(user =>
            <Link to={`/users/${user.id}`}
                  key={user.id}
                  data-testid="user-item"
            >
            {user.name}
        </Link>
        )}
    </div>
}

export default Users
