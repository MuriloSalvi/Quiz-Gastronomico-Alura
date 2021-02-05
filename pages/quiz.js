/* eslint-disable space-before-blocks */
/* eslint-disable react/jsx-indent */
import React from 'react';
import db from '../db.json';
import StartButton from '../src/components/StartButton';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

function QuestionWidget({
  question, totalQuestions, questionIndex,
}){
  return (
    <Widget>
    <Widget.Header>
      <h3>
        {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </h3>
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
      <form>
      {question.alternatives.map((alternative, alternativeIndex) => {
        const alternativeID = `alternative__${alternativeIndex}`;
        return (
          <Widget.Topic htmlFor={alternativeID}>
            {alternative}
            <input
              id={alternativeID}
              type="radio"
            />
          </Widget.Topic>
        );
      })}

 {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}
      <StartButton type="submit">
        Confirmar
      </StartButton>
      </form>
    </Widget.Content>

    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Loading?]
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/MuriloSalvi" />
      <QuizContainer>
        <QuizLogo />
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
          />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
