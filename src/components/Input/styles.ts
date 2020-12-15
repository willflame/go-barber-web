import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border: 0.2rem solid #232129;
  color: #666360;

  border-radius: 1rem;
  padding: 1.6rem;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #ff9000;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;

export const Errors = styled.div`
  height: 2rem;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }
`;
