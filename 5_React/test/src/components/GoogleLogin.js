import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
  const handleCredentialResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    const userEmail = decodedToken.email; // 사용자 이메일
    console.log("User Email:", userEmail);
  };

  useEffect(() => {
    const google = window.google;
    if (google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
      );
    } else {
      console.error("Google SDK not loaded.");
    }
  }, []);

  return <div id="googleSignInButton"></div>;
};

export default GoogleLogin;
