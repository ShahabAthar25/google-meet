import axios from "axios";

export default async (socket, next) => {
  try {
    const accessToken = socket.request.headers.authorization.split(" ")[1];
    const response = await axios.get(
      `https://dev-8271s11u.us.auth0.com/userinfo`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    socket.request.user = response.data;

    next();
  } catch (error) {
    console.log(error.message);
  }
};
