import React, {
  ButtonHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import useOnClickOutside from 'use-onclickoutside';
import { Container, ContainerButton } from './styles';

interface SuperunitItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  defaultSuperUnit: string;
}

const SuperunitItem: React.FC<SuperunitItemProps> = ({
  icon: Icon,
  children,
  defaultSuperUnit,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const handleClick = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  return (
    <Container onClick={handleClick} ref={ref}>
      <ContainerButton
        className="superunit-item"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {Icon && <Icon size={20} />}
        {defaultSuperUnit}
      </ContainerButton>
      {isMenuOpen && children}
    </Container>
  );
};

export default SuperunitItem;
