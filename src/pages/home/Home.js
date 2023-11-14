import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setLoading(false);
        // console.log(results[0].title);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  console.log(isLoading);
  console.log(nowPlayingData);

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <div>{nowPlayingData && <Banner BannerData={nowPlayingData[0]} />}</div>
      )}
    </>
  );
};

// results 비구조화할당
// 배열
