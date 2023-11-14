import styled from "styled-components";
import { IMG_URL } from "../../constants";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    max-width: 650px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }

    p {
      font-size: 16px;
    }
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

export const Banner = ({ BannerData }) => {
  return (
    <MainBanner $bgUrl={BannerData.backdrop_path}>
      <BlackBg />
      <h3>{BannerData.title}</h3>
      <p>{BannerData.overview.slice(0, 100) + "..."}</p>
    </MainBanner>
  );
};
