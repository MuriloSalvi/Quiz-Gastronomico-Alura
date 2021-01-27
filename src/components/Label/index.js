import styled from 'styled-components'

const Label = styled.input`
background-color: ${({ theme }) => theme.colors.contrastText};
border: 1px solid ${({ theme }) => theme.colors.mainBg};
width: 100%;
height: 25px;
border-radius: 10px;
padding: 8px;
color: ${({ theme }) => theme.colors.secondary};
text-align: center;
outline: none;
`

export default Label;
