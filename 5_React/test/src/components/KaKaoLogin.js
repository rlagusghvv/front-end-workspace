import React, { useEffect } from "react";

const KakaoLogin = () => {
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY); // 초기화
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        // 로그인 성공 시 사용자 정보 가져오기
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const email = res.kakao_account.email;
            console.log("User Email:", email); // 이메일 콘솔에 출력
          },
          fail: (error) => {
            console.error("Failed to get user info:", error);
          },
        });
      },
      fail: (err) => {
        console.error("Login failed:", err);
      },
    });
  };

  return <button onClick={handleLogin}>Login with Kakao</button>;
};

export default KakaoLogin;
