import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { ClimbingBoxLoader } from "react-spinners";
import styled from "styled-components";

const Loding = styled.div``;

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
      {!isLoading ? (
        <Loding>
          <ClimbingBoxLoader color="#e3d554" />
        </Loding>
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner bannerData={nowPlayingData[0]} />
              <ShowMovie showMovieData={nowPlayingData} />
            </>
          )}
        </div>
      )}
    </>
  );
};

// results 비구조화할당
// 배열
// ... 스프레드 연산자
// breakpoints = 반응형 관련
