import { useAuth0 } from "@auth0/auth0-react";
import Clock from "../conponents/Clock";
import LogIn from "../conponents/LogIn";
import logo from "../images/logo.png";
import {
  Bars4Icon,
  Cog8ToothIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline/";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();

  console.log(user.picture);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-[10%] flex items-center justify-between px-3 py-2">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h1 className="mt-1 text-[24px] leading-6 ml-1 text-gray-600 font-medium">
            Meet
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Clock />
          {isAuthenticated ? (
            <div className="flex items-center pl-3 space-x-10">
              <div className="flex items-center space-x-6">
                <QuestionMarkCircleIcon className="h-6 text-gray-600" />
                <FlagIcon className="h-6 text-gray-600" />
                <Cog8ToothIcon className="h-6 text-gray-600" />
              </div>
              <div className="flex items-center space-x-4">
                <Bars4Icon className="h-6 text-gray-600" />
                <img src={user.picture} alt="" className="h-8 rounded-full" />
              </div>
            </div>
          ) : (
            <div>
              <LogIn />
            </div>
          )}
        </div>
      </div>
      <div className="flex-[90%]">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
