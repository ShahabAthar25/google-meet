import axios from "axios";

export default async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      `https://dev-8271s11u.us.auth0.com/userinfo`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    req.user = response.data;

    next();
  } catch (error) {
    console.log(error.message);
  }
};
