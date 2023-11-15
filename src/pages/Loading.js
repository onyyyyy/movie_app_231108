import { ClimbingBoxLoader } from "react-spinners";
import styled from "styled-components";

const SLoding = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoding>
      <ClimbingBoxLoader color="#e3d554" />
    </SLoding>
  );
};
