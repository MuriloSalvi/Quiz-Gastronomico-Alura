/* eslint-disable linebreak-style */
import styled from 'styled-components';

const AlternativeForm = styled.form`
 label{
     &[data-selected='true']{
         background-color: ${({ theme }) => theme.colors.wrong}
     }
     &[data-status="SUCESS"]{
         background-color: ${({ theme }) => theme.colors.success}
     }
     &[data-status = "ERROR"]{
        background-color: ${({ theme }) => theme.colors.wrong}
     }
 }
`;

export default AlternativeForm;
