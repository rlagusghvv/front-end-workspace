// src/components/PlayerControls.js
import React from "react";
import { play, pause } from "../services/spotifyService";

const PlayerControls = ({ token, deviceId }) => {
  return (
    <div>
      <button onClick={() => play(deviceId, token)}>Play</button>
      <button onClick={() => pause(deviceId, token)}>Pause</button>
    </div>
  );
};

export default PlayerControls;
