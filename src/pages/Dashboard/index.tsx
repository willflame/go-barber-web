import React from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
} from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/16438605?s=460&u=d57001671c6a1d47171e3b65f3c5461dd2ae3185&v=4"
              alt={user.name}
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>user.name</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="" alt="Nome cliente" />

              <strong>Nome cliente</strong>
              <span>
                <FiClock />
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar>
          <div />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
