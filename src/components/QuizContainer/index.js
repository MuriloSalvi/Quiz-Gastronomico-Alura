import styled from 'styled-components';
import propTypes from 'prop-types';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

QuizContainer.PropTypes = {
  optionalElement: propTypes.element,
};
export default QuizContainer;
