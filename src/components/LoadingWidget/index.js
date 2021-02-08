import styled from "styled-components";
import Widget from "../Widget";

const Animation = styled.div`
  background-image: url("https://i.pinimg.com/originals/17/86/96/178696fb4e2f78505fbf56fd228119fa.png");
  background-position: center;
  background-size: cover;
  width: 75px;
  height: 75px;
  margin-left: 90px;
  animation-name: "rotate";
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Reticencias = styled.div`
  font-weight: bolder;
  font-size: 20px;
  animation-name: show;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes show {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <Reticencias>Carregando...</Reticencias> <Animation></Animation>
      </Widget.Header>
    </Widget>
  );
}

export default LoadingWidget;
