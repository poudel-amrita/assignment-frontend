import { useEffect, useState } from "react";
import axios from "axios";
import { deleteCookie } from "cookies-next";
import Button from "@/components/Button/button";

interface User {
  name: string;
  email: string;
  picture: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching the user data:", error)
      );
  }, []);
  const handleSignOut = () => {
    const jwt_cookie = deleteCookie("jwt");
    console.log(jwt_cookie);
    window.location.href = "http://127.0.0.1:8000/logout";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-auto">
          <div className="flex items-center flex-col space-x-4">
            <img
              src={user.picture}
              alt="Profile picture"
              className=" w-20 h-20 rounded-full object-cover"
            />
            <h1 className="text-2xl font-semibold mt-2">{user.name}</h1>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="flex justify-center items-center mt-9">
            <Button onClick={handleSignOut} buttonText="Sign Out" />
          </div>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
}
