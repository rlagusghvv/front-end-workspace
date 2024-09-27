// src/components/SpotifyAuth.js
import React from "react";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
];

const SpotifyAuth = () => {
  return (
    <div>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login with Spotify
      </a>
    </div>
  );
};

export default SpotifyAuth;
