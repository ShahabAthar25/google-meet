import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../images/logo.png";
import { useEffect, useRef, useState } from "react";
import { MicrophoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

export default function WaitingRoom({ userVideo }) {
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
      <div className="flex-[0.95] flex items-center justify-center">
        <div className="flex-[0.7] flex relative max-w-3xl max-h-fit">
          <video
            ref={userVideo}
            className="rounded-xl shadow-xl w-full"
            autoPlay
            playsInline
            muted
          />
          <div
            className="absolute bottom-2 left-1/2 flex items-center space-x-8"
            style={{ transform: "translate(-50%, 0)" }}
          >
            <div className="rounded-full border-2 border-white flex items-center justify-center">
              <MicrophoneIcon className="text-white h-6 m-4 " />
            </div>
            <div className="rounded-full border-2 border-white flex items-center justify-center">
              <VideoCameraIcon className="text-white h-6 m-4 " />
            </div>
          </div>
        </div>
        <div className="flex-[0.3] flex items-center justify-center flex-col space-y-4">
          <h1 className="text-3xl text-gray-800">Ready to join?</h1>
          <Link to={`/room/${query.get(`destination`)}`}>
            <button className="px-7 py-4 shadow-xl bg-blue-600 rounded-full text-white">
              Ask to join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
