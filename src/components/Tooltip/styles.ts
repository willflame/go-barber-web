import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translate(-50%);

    color: #312e38;

    &::hover {
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      bottom: 2rem;
      content: '';
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
