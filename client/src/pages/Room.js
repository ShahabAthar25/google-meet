import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { useAuth0 } from "@auth0/auth0-react";

import WaitingRoom from "../conponents/WaitingRoom";

function Room() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [stream, setStream] = useState("");
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently();
      socket.current = io.connect("/", {
        extraHeaders: {
          authorization: `Bearer ${token}`,
        },
      });

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
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {true ? <WaitingRoom userVideo={userVideo} /> : <h1>Hello World</h1>}
    </div>
  );
}

export default Room;
