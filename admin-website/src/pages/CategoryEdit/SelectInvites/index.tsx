import React, { useCallback } from 'react';
import { FiCheck, FiX, FiSend } from 'react-icons/fi';
import { Container, Content, Invite } from './styles';

interface IInvite {
  name: string;
  id: string;
  selected: boolean;
}

interface IProps {
  value: IInvite[];
  onChange: (data: IInvite[]) => void;
}

const SelectInvites: React.FC<IProps> = ({ value, onChange }) => {
  const handleToggle = useCallback(
    (id: string) => {
      onChange(
        value.map(invite =>
          invite.id === id ? { ...invite, selected: !invite.selected } : invite,
        ),
      );
    },
    [value, onChange],
  );

  return (
    <Container>
      <h1>Selecione os tipos de convite que a categoria irá ter acesso:</h1>
      <Content>
        {value.map(invite => (
          <Invite
            key={invite.id}
            onClick={() => handleToggle(invite.id)}
            selected={invite.selected}
          >
            <div>
              <FiSend />
              <p>{invite.name}</p>
            </div>
            {invite.selected && (
              <span>
                <FiX size={10} />
                <FiCheck size={10} />
              </span>
            )}
          </Invite>
        ))}
      </Content>
    </Container>
  );
};

export default SelectInvites;
