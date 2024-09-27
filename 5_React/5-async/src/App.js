import { getFetchThen, getAwait, getAxios } from "./api/movie.js";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    });
  };

  const loadAwait = async () => {
    const result = await getAwait();
    setData(result);
  };

  const loadAxios = async() => {
  const result = await getAxios();
  setData(result);
  }
  useEffect(() => {
//    loadFetchThen();
//    loadAwait();
loadAxios();
  }, []);
  return (
    <>
      {data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h1>{movie.genre}</h1>
          <h1>{movie.actor}</h1>
        </div>
      ))}
    </>
  );
};

export default App;
