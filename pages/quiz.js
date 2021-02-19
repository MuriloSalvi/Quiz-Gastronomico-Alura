/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable import/no-named-as-default */
/* eslint-disable space-before-blocks */
/* eslint-disable react/jsx-indent */
import { useRouter } from 'next/router';

import React from 'react';
import db from '../db.json';
import StartButton from '../src/components/StartButton';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import AlternativeForm from '../src/components/AlternativeForm';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import LoadingWidget from '../src/components/LoadingWidget';

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionID = `questionID__ ${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativeForm onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 1 * 1000);
        }}
        >

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                htmlFor={alternativeID}
                key={alternativeID}
                as="label"
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                {alternative}
                <input
                  style={{ display: 'none' }}
                  id={alternativeID}
                  name={questionID}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}
          <StartButton type="submit">Confirmar</StartButton>
        </AlternativeForm>
        {isQuestionSubmited
            && isCorrect
            && (
            <p>
              Você acertou!
            </p>
            )}

          {isQuestionSubmited
          && !isCorrect
          && (
          <p>Você errou</p>
          )}
      </Widget.Content>

    </Widget>
  );
}

const ScreenStates = {
  quiz: 'quiz',
  loading: 'loading',
  result: 'result',
};
export default function QuizPage() {
  const [ScreenState, setScreenState] = React.useState(ScreenStates.loading);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result){
    setResults([
      ...results,
      result,
      addResult,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(ScreenStates.quiz);
    }, 1 * 1000);
  }, []);

  // nasce === didMount
  // atualiza === willUpdate
  // morre === willUnmount

  function handleSubmitQuiz(){
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions){
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(ScreenStates.result);
    }
  }

  function ResultWidget({ results }){
    const router = useRouter();

    return (
    <Widget>
      <Widget.Header>
       Resultado:
      </Widget.Header>
      <Widget.Content>
        <h2>
          {'Você acertou '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {` de ${totalQuestions} Perguntas!`}
        </h2>
         <ul>
          {results.map((result, index) => (
            {/* <li key={`result`}>
              {`Pergunta 0${index + 1}: `}
              {result === true ? 'Acertou' : 'errou'}
            </li> */}
          ))}
         </ul>
      </Widget.Content>

      <StartButton
        onClick={() => router.push('/')}
        type="submit"
      >
         jogar Novamente
      </StartButton>

    </Widget>
    );
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/MuriloSalvi" />
      <QuizContainer>
        <QuizLogo />
        {ScreenState === ScreenStates.quiz && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {ScreenState === ScreenStates.loading && <LoadingWidget />}
        {ScreenState === ScreenStates.result && <ResultWidget results={results} />}

      </QuizContainer>
    </QuizBackground>
  );
}
