import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Label from '../src/components/Label';
import StartButton from '../src/components/StartButton';
import QuizContainer from '../src/components/QuizContainer';

function LoadingWidget(){
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
  console.log(db.questions)
  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/MuriloSalvi" />
      <QuizContainer>
        <QuizLogo></QuizLogo>
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {' '}
              {`${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src={db.questions.image}
          />
          <Widget.Content>
            <h2>Tutulo</h2>
            <p>Desc</p>

            <StartButton type='submit'>
            Confirmar
        </StartButton>
          </Widget.Content>


        </Widget>
        <LoadingWidget></LoadingWidget>
      </QuizContainer>
    </QuizBackground>
  );
}
