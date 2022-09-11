import { expressjwt } from "express-jwt";
import jwks from "jwks-rsa";

export default expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-8271s11u.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://google-meet-api.com",
  issuer: "https://dev-8271s11u.us.auth0.com/",
  algorithms: ["RS256"],
});
