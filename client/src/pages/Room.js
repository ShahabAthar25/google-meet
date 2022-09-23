import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

import WaitingRoom from "../conponents/WaitingRoom";

function Room() {
  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [stream, setStream] = useState("");
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const socketRef = useRef();
  const userVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
        audio: true,
      })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {true ? <WaitingRoom userVideo={userVideo} /> : <h1>Hello World</h1>}
    </div>
  );
}

export default Room;
