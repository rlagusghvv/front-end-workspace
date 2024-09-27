import React, { useEffect, useState } from "react";
import SpotifyPlayer from "./components/SpotifyPlayer";
import { getTokenFromUrl } from "./services/spotifyService";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">
      {!token ? (
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20streaming&response_type=token&show_dialog=true`}
        >
          Login with Spotify
        </a>
      ) : (
        <SpotifyPlayer token={token} />
      )}
    </div>
  );
};

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming", // 이 스코프가 중요합니다.
];

// authorization 링크에 스코프 포함
<a
  href={`https://accounts.spotify.com/authorize?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&redirect_uri=${
    process.env.REACT_APP_SPOTIFY_REDIRECT_URI
  }&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
>
  Login with Spotify
</a>;

const token = getTokenFromUrl().access_token;

export default App;
