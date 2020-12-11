import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  width: 100%;
  font-weight: 500;
  margin-top: 1.6rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
