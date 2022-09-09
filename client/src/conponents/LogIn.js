import { useAuth0 } from "@auth0/auth0-react";

export default function LogIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="border-[2px] bg-[#4285f4] text-white font-semibold shadow-md rounded-full px-7 py-1"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}
