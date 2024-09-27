import { useEffect, useState } from "react";

const SpotifyPlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [playerState, setPlayerState] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "My Spotify Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (state) {
          setPlayerState(state);
          setIsPaused(state.paused);
          setCurrentTrack(state.track_window.current_track);
        }
      });

      player.connect();
    };
  }, [token]);

  // Check if the player is initialized before calling player methods
  const handlePreviousTrack = () => {
    if (player) {
      player.previousTrack();
    } else {
      console.log("Player is not ready");
    }
  };

  const handlePlayPause = () => {
    if (player) {
      if (isPaused) {
        player.resume();
      } else {
        player.pause();
      }
    } else {
      console.log("Player is not ready");
    }
  };

  const handleNextTrack = () => {
    if (player) {
      player.nextTrack();
    } else {
      console.log("Player is not ready");
    }
  };

  return (
    <div>
      <h1>Spotify Player</h1>
      {deviceId ? (
        <div>
          {currentTrack && (
            <div>
              <img
                src={currentTrack.album.images[0].url}
                alt={currentTrack.name}
                style={{ width: 300 }}
              />
              <h2>{currentTrack.name}</h2>
              <p>{currentTrack.artists[0].name}</p>
            </div>
          )}
          <div>
            <button onClick={handlePreviousTrack}>Previous</button>
            <button onClick={handlePlayPause}>
              {isPaused ? "Play" : "Pause"}
            </button>
            <button onClick={handleNextTrack}>Next</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpotifyPlayer;
