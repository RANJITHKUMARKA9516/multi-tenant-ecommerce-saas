import { useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-white p-8 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Role:</strong> {user?.role}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
