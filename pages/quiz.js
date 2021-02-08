/* eslint-disable space-before-blocks */
/* eslint-disable react/jsx-indent */
import React from "react";
import db from "../db.json";
import StartButton from "../src/components/StartButton";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizContainer from "../src/components/QuizContainer";
import LoadingWidget from "../src/components/LoadingWidget"


function QuestionWidget({ question, totalQuestions, questionIndex,onSubmit }) {
  const questionID = `questionID__ ${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit ={(infosDoEvento)=>{
          infosDoEvento.preventDefault()
          onSubmit()
        }} >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic htmlFor={alternativeID} as="label">
                {alternative}
                <input
                  styçe={"display:none"}
                  id={alternativeID}
                  type="radio"
                  name="option"
                />
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}
          <StartButton type="submit">Confirmar</StartButton>
        </form >
      </Widget.Content>
    </Widget>
  );
}



const ScreenStates = {
  quiz: "quiz",
  loading: "loading",
  result: "result",
};
export default function QuizPage() {
  const [ScreenState, setScreenState] = React.useState(ScreenStates.loading);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(()=>{
    setTimeout(()=>{
      setScreenState(ScreenStates.quiz);
    }, 1 * 500);
  },[]);
  
  //nasce === didMount
  //atualiza === willUpdate
  //morre === willUnmount

  function handelSubmitQuiz(){
    const nextQuestion = questionIndex + 1;
     if(nextQuestion < totalQuestions){
      setCurrentQuestion(questionIndex + 1)
    } else {
      setScreenState(ScreenState.result)
    }
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
            onSubmit={handelSubmitQuiz}
          />
        )}

        {ScreenState === ScreenStates.loading && <LoadingWidget/>}
        {ScreenState === ScreenStates.result && (
          <div>Parabéns, voce acertou X questões!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
