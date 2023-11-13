import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    18deg,
    rgba(0, 0, 0, 1) 21%,
    rgba(255, 255, 255, 0.5080882694874824) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoading] = useState(true);

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

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                suscipit distinctio temporibus perferendis similique, quos et
                labore obcaecati nihil quibusdam, at, doloribus quaerat sed
                consequuntur magnam magni veniam saepe earum?
              </p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};

// results 비구조화할당
// 배열
