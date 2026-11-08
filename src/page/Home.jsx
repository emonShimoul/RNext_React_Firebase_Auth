import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>User info loading...</p>;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out!!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>Welcome, {user?.email}</div>
      <button
        className="bg-black text-white rounded p-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
