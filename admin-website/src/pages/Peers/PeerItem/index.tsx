import React, { useCallback, useState } from 'react';
import { FiCheck, FiFile, FiRotateCw, FiSmartphone } from 'react-icons/fi';
import {
  Container,
  Infos,
  Contact,
  Extra,
  Status,
  StyledButton,
} from './styles';
import defaultUserIcon from '../../../assets/defaultUserIcon.png';
import { useToast } from '../../../hooks/toast';
import api from '../../../services/api';

interface PeerItemProps {
  name: string;
  phone: string;
  email: string;
  gender: string;
  nature: string;
  id: string;
  active: boolean;
}

const PeerItem: React.FC<PeerItemProps> = ({
  name,
  phone,
  email,
  gender,
  nature,
  active,
}) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const phoneMasked = phone
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');

  const handleResendEmail = useCallback(
    (peerEmail: string) => {
      setLoading(true);

      try {
        api.post('/users/confirmemail/resend', peerEmail);

        addToast({
          type: 'success',
          title: 'E-mail de confirmação reenviado.',
          description:
            'Um e-mail para confirmar o cadastro do usuário foi reenviado.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro no reenvio do e-mail',
          description:
            'Ocorreu um erro ao tentar reenviar o e-mail de confirmação, tente novamente',
        });

        return;
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Infos>
        <img src={defaultUserIcon} alt="User" />
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </Infos>
      <Contact>
        <div>
          <FiSmartphone />
          <p>{phoneMasked}</p>
        </div>
      </Contact>
      <Extra>
        <div>
          <FiFile />
          <h1>{gender}</h1>
          <div />
          <p>{nature}</p>
        </div>
      </Extra>
      {active ? (
        <Status active={active}>
          <div>
            <FiCheck />
            <h1>Ativo</h1>
          </div>
        </Status>
      ) : (
        <Status active={active}>
          <StyledButton
            name="Reenviar E-mail"
            onClick={() => handleResendEmail(email)}
            icon={FiRotateCw}
            loading={loading}
          >
            <h1>Inativo</h1>
            <h2>|</h2>
            <h2> Reenviar e-mail</h2>
          </StyledButton>
        </Status>
      )}
    </Container>
  );
};

export default PeerItem;
