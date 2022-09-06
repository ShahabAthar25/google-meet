import { useAuth0 } from "@auth0/auth0-react";
import Clock from "../conponents/Clock";
import logo from "../images/logo.png";

export default function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-[10%] flex items-center justify-between px-3 py-2">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h1 className="mt-1 text-[24px] leading-6 ml-1 text-gray-600 font-medium">
            Meet
          </h1>
        </div>
        <div className="flex items-center">
          <Clock />
          {isAuthenticated ? (
            <div>
              <button>Log In</button>
            </div>
          ) : (
            <div>Log In</div>
          )}
        </div>
      </div>
      <div className="flex-[90%]">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
