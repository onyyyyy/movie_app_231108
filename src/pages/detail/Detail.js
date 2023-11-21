import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    padding: 100px 50px;
    flex-direction: column;
    align-items: center;
  }
`;

const Poster = styled.div`
  width: 50%;
  height: 700px;
  background-color: lightblue;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 450px) {
    width: 90%;
    height: 400px;
  }
`;

const Wrap = styled.div`
  width: 45%;
  p {
    line-height: 30px;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    p {
      line-height: 22px;
      font-size: 14px;
    }
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin: 20px 0 10px 0;
  }
`;

const Information = styled.div`
  font-size: 20px;
  line-height: 40px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const Grade = styled.div``;

const Genre = styled.ul`
  padding-left: 5%;
  li {
    list-style: disc;
    line-height: 30px;
  }
`;

const Premiere = styled.div``;

const Runtime = styled.div``;

const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: gray;
  margin: 40px 0;
  @media screen and (max-width: 450px) {
    margin: 20px 0;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setMovieData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:" + error);
      }
    })();
  }, [id]);

  // console.log(movieData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {movieData && (
            <>
              <Container>
                <Poster $bgUrl={movieData.poster_path}></Poster>
                <Wrap>
                  <Title>{movieData.title}</Title>
                  <Information>
                    <Grade>평점 {Math.round(movieData.vote_average)}점</Grade>
                    <Genre>
                      {movieData.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </Genre>
                    <Premiere>개봉일 {movieData.release_date}</Premiere>
                    <Runtime>런타임 {movieData.runtime}분</Runtime>
                  </Information>
                  <Line></Line>
                  <p>{movieData.overview}</p>
                </Wrap>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};
