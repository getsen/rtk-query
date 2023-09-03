import { useUsers } from "../hooks/useUsers";
import { Link } from "react-router-dom";
import "./users.css";

export const Users = () => {
  const { users } = useUsers();

  return (
    <div className="usersDiv">
      <table>
        <tbody>
          {users.data?.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={`/user/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
