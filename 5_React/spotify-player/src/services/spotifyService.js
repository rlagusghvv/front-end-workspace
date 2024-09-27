import axios from "axios";

// 현재 재생 중인 트랙 데이터 가져오기
export const getSpotifyData = async (token) => {
  const res = await axios.get("https://api.spotify.com/v1/me/player", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 재생 함수
export const play = async (deviceId, token) => {
  await axios.put(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 일시정지 함수
export const pause = async (deviceId, token) => {
  await axios.put(
    `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
