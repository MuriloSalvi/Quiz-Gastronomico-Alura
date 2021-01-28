import PropTypes from 'prop-types';
import styled from 'styled-components';

const StartButton = styled.button`
background-color: ${({ theme }) => theme.colors.item};
margin-top: 13px;
width: 100%;
color: ${({ theme }) => theme.colors.contrastText};
padding: 8px;
border-radius: 10px;
outline: none;
border: 2px solid ${({ theme }) => theme.colors.secondary};
cursor: pointer;
box-shadow: 0px 5px 5px rgb(0,0,0, 0.5);
position: relative;

&:hover{
    opacity: 0.5
}
&:active{
    top: 3px;
    box-shadow: none;
}
`;

StartButton.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
};
// eslint-disable-next-line eol-last
export default StartButton;