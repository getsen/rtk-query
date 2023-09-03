import { useSelector } from "react-redux";
import { usersApi } from "../../app/services/user-api";
import { User } from "../../types/User";

export const useProfile = (userId: string | undefined) => {
  const selectUsersResult = usersApi.endpoints.getUsers.select();
  const selectedUser: User | undefined = useSelector(
    selectUsersResult
  ).data?.filter(user => user.id.toString() === userId)[0];

  return {
    selectedUser,
  };
};
