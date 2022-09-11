import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../images/logo.png";

export default function WaitingRoom() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div className="flex-[0.05] flex items-center justify-between px-4">
        <div className="flex">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="mt-1 text-[22px] leading-6 ml-1 text-gray-600 font-medium">
            Meet
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center pl-3 space-x-4">
            <h1 className="text-gray-700">{user.email}</h1>
            <img src={user.picture} alt="" className="h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex-[0.95] flex">
        <h1>Body</h1>
      </div>
    </div>
  );
}
