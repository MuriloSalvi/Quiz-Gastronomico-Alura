
import styled from 'styled-components'

const StartButton = styled.button`
background-color: ${({ theme }) => theme.colors.item};
margin-top: 13px;
width: 100%;
color: ${({theme})=> theme.colors.contrastText};
padding: 8px;
border-radius: 10px;
outline: none;
border: 2px solid ${({theme})=>theme.colors.secondary}
`


export default StartButton;