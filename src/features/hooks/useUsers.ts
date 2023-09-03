import { useSelector } from "react-redux";
import { useGetUsersQuery, usersApi } from "../../app/services/user-api";

export const useUsers = () => {
  useGetUsersQuery();

  const selectUsersResult = usersApi.endpoints.getUsers.select();
  const users = useSelector(selectUsersResult);

  console.log("selectUsersResult::: ", users.status);

  return {
    users,
  };
};
