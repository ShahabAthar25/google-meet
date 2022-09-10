import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import {
  Bars4Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  FlagIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline/";
import Clock from "../conponents/Clock";
import LogIn from "../conponents/LogIn";
import logo from "../images/logo.png";
import { ReactComponent as ImageOne } from "../images/image1.svg";
import { ReactComponent as ImageTwo } from "../images/image2.svg";
import { ReactComponent as ImageThree } from "../images/image3.svg";
import Card from "../conponents/Card";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();

  const [link, setLink] = useState("");
  const [current, setCurrent] = useState(0);
  const imageTotal = 3;

  const data = [
    {
      image: ImageOne,
      title: "Get a link that you can share",
      description: "to get a link you can send to people you want to meet with",
      pretext: true,
    },
    {
      image: ImageTwo,
      title: "Plan ahead",
      description:
        "to schedule meetings in Google Calendar and send invites to participants",
      pretext: true,
    },
    {
      image: ImageThree,
      title: "Your meeting is safe",
      description:
        "No one can join a meeting unless invited or admitted by the host",
    },
  ];

  const nextSlide = () => {
    setCurrent(current === imageTotal - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? imageTotal - 1 : current - 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-[10%] flex items-center justify-between px-4">
        <div className="flex">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="mt-1 text-[22px] leading-6 ml-1 text-gray-600 font-medium">
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
        <div className="flex-[40%] ml-24 flex flex-col justify-center">
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
              <button className="bg-blue-600 flex items-center rounded-lg px-3 py-3 border-0 text-white font-roboto">
                <VideoCameraIcon className="h-6 text-white mr-4" />
                New meeting
              </button>
              <form className="flex items-center space-x-4">
                <div className="flex items-center border-[1px] border-gray-500 rounded-sm px-2">
                  <PencilSquareIcon className="h-6 text-gray-600" />
                  <input
                    type="text"
                    className="bg-transparent border-none px-2 py-3 outline-none text-gray-800"
                    placeholder="Enter a code or link"
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
          <div className="border-b-[1px] border-gray-300 w-full my-8 max-w-xl"></div>
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
        <div className="flex-[60%] flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <button
              className="bg-transparent border-0 cursor-pointer"
              onClick={() => previousSlide()}
            >
              <ChevronLeftIcon className="h-6" />
            </button>

            {data.map((slide, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  current={current}
                  slide={slide}
                  Image={slide.image}
                />
              );
            })}

            <button
              className="bg-transparent border-0 cursor-pointer"
              onClick={() => nextSlide()}
            >
              <ChevronRightIcon className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
