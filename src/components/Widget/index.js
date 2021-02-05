import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgb(0,0,0, 0.5);

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px 10px 0px 0px;
  
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
outline: 0;
text-decoration: none;
cursor: pointer;
background-color:${({ theme }) => theme.colors.primary};
color:${({ theme }) => theme.contrastText};
padding: 10px 15px;
margin-bottom: 8px;
border-radius: 10px;
border: 1px solid #5C3024;
display: block;
text-align:center;
&:hover,
&:focus{
  opacity: .5;
}
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  border-radius: 10px
`;

export default Widget;
