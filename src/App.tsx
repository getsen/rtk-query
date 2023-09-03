import { Users } from "./features/users/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProfile } from "./features/user-profile/UserProfile";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Users} />
        <Route path="/user/:userId" Component={UserProfile} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
