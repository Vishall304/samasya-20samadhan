import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContent";
import {signOut} from "firebase/auth";
import {auth} from "../services/firebase";
import {useNavigate} from "react-router-dom";
import {Button} from "../components/ui/button";

export default function Profile() {
  const { user } = useAuth();
  const navigate =useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/")
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-lg">
            <strong>Email:</strong> {user?.email}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Sessions</h2>
            <p>No sessions yet</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">History</h2>
            <p>No history yet</p>
          </div>
          {/* Logout button */}
          <div className="mt-8">
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg">
                Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}