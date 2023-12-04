import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
import { useScrollTop } from "../../lib/useScrollTop";

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [isLoading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);
        // console.log(results[0].title);

        const { results: popResults } = await popular();
        setPopData(popResults);
        // console.log(popResults);

        const { results: topRatedResults } = await topRated();
        setTopRatedData(topRatedResults);
        // console.log(topRatedResults);

        const { results: upcomingResults } = await upcoming();
        setUpcomingData(upcomingResults);
        // console.log(upcomingResults);

        setLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(isLoading);
  // console.log(nowPlayingData);
  // console.log(popData);
  // console.log(topRatedData);
  // console.log(upcomingData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowPlayingData && (
            <>
              <PageTitle titleName={"HOME"} />
              <Banner bannerData={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  titleName={"현재 상영작"}
                  showMovieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 상영작"} showMovieData={popData} />
                <ShowMovie
                  titleName={"영화 랭킹"}
                  showMovieData={topRatedData}
                />
                <ShowMovie
                  titleName={"상영 예정작"}
                  showMovieData={upcomingData}
                />
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
};

// results 비구조화할당
// 배열
// ... 스프레드 연산자
// breakpoints = 반응형 관련
