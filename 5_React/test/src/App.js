import GoogleLogin from "./components/GoogleLogin";
import KakaoLogin from "./components/KaKaoLogin";
// import NaverLoginComponent from './components/NaverLogin';

const App = () => (
  <div>
    <h1>Social Login</h1>
    <GoogleLogin />
    <KakaoLogin />
    {/* <NaverLogin /> */}
  </div>
);

export default App;
