import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
background-color: ${({ theme }) => theme.colors.contrastText};
border: 1px solid ${({ theme }) => theme.colors.mainBg};
width: 100%;
height: 25px;
border-radius: 10px;
padding: 8px;
color: ${({ theme }) => theme.colors.secondary};
text-align: center;
outline: none;
`;

export default function Label({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
Label.deafaultProps = {
  value: '',
};

Label.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholdeer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
