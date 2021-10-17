import Loader from "react-loader-spinner";
import { StyledDiv } from "./Loader.styled";

export const Loaders = () => {
  return (
    <StyledDiv>
      <h1>Loading...</h1>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        loading={true}
      />
    </StyledDiv>
  );
};