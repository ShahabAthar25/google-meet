import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { useAuth0 } from "@auth0/auth0-react";

import WaitingRoom from "../conponents/WaitingRoom";
import MeetingRoom from "../conponents/MeetingRoom";

function Room() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [users, setUsers] = useState([]);

  console.log(users);

  const socket = useRef();
  const userVideo = useRef();

  useEffect(() => {
    const connectToIO = async () => {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1920, height: 1080 },
          audio: true,
        })
        .then((stream) => {
          userVideo.current.srcObject = stream;
        })
        .catch((e) => {
          console.error(e);
        });

      socket.current = io.connect("ws://localhost:5000/", {
        extraHeaders: {
          authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
      });
      socket.current.emit("join room", 1234567890);
      socket.current.on("room full", () => console.log("Room is full"));
      socket.current.on("all users", (users) => {
        setUsers(users);
        console.log(users);
      });
    };

    connectToIO();
  }, [getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {true ? (
        <WaitingRoom userVideo={userVideo} />
      ) : (
        <MeetingRoom userVideo={userVideo} />
      )}
    </div>
  );
}

export default Room;
