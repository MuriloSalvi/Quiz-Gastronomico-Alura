/* eslint-disable react/react-in-jsx-scope */
import { Router, useRouter } from 'next/router';
import Widget from '../Widget';
import StartButton from '../StartButton';

function ResultWidget( { results }) {
  const router = useRouter();

  function Restart() {
    router.push('/');
  }

  return (
    <Widget>
      <Widget.Header>
        <h1>Você Acertou X questões</h1>
        <ul>{results}</ul>
      </Widget.Header>
      <StartButton onClick={Restart}> jogar Novamente</StartButton>

    </Widget>
  );
}

export default ResultWidget;
