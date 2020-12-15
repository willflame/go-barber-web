import React from 'react';

import { Container } from './styles';

interface Tooltip {
  title: string;
}

const Tooltip: React.FC = ({ title }) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
