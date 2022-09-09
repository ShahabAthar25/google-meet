import { useAuth0 } from "@auth0/auth0-react";
import Clock from "../conponents/Clock";
import LogIn from "../conponents/LogIn";
import logo from "../images/logo.png";
import {
  Bars4Icon,
  Cog8ToothIcon,
  FlagIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline/";
import { useState } from "react";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();

  const [link, setLink] = useState("");

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
      <div className="flex-[90%] flex m-auto w-full">
        <div className="flex-[50%] ml-24 flex flex-col justify-center">
          <div>
            <div className="text-[2.75rem] font-medium leading-[3.25rem] tracking-normal font-roboto text-gray-900 max-w-[500px]">
              <h1>Premium video meetings.</h1>
              <h1>Now free for everyone.</h1>
              <p className="text-gray-600 text-base mt-6 mb-12">
                We re-engineered the service we built for secure business
                meetings, Google Meet, to make it free and available for all.
              </p>
            </div>
            <div className="flex items-center space-x-7">
              <button className="bg-blue-600 flex items-center rounded-lg px-3 py-3 border-0 text-white font-roboto font-semibold">
                <VideoCameraIcon className="h-6 text-white mr-4" />
                New meeting
              </button>
              <form className="flex items-center space-x-4">
                <div className="flex items-center border-[1px] border-gray-500 rounded-sm px-2">
                  <PencilSquareIcon className="h-6 text-gray-600" />
                  <input
                    type="text"
                    className="bg-transparent border-none px-2 py-3 outline-none"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                {link.length !== 0 && (
                  <button className="text-blue-600 px-4 py-3 rounded-sm hover:bg-blue-50 duration-300">
                    Join
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="border-[1px] border-gray-400 w-full my-8 max-w-xl"></div>
          <div className="flex font-roboto">
            <a
              href="https://support.google.com/meet/?hl=en"
              className="pr-1 text-blue-600 hover:underline"
            >
              Learn more
            </a>
            about google meet
          </div>
        </div>
        <div className="flex-[50%] flex items-center justify-center">
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
}
