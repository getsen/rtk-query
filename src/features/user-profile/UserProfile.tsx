import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";

export const UserProfile = () => {
  const { userId } = useParams();
  console.log("user ID", userId);

  const { selectedUser } = useProfile(userId);

  return <>{selectedUser?.name}</>;
};
